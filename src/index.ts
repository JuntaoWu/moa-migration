import "reflect-metadata";
import { createConnection } from "typeorm";
import * as mongoose from "mongoose";

import { config } from './config/config';
import { SPlatUser } from "./entities/s_plat_user";
import WxUserModel, { WxUser } from "./models/wxuser.model";
import { SPlatFightcardbfs } from "./entities/s_plat_fightcardbfs";
import RankModel from "./models/rank.model";
import { SPlatFightnumbfs } from "./entities/s_plat_fightnumbfs";
import { SPlatFightbfs } from "./entities/s_plat_fightbfs";

const mongoUri = config.mongo.host;

createConnection({
    "name": "default",
    "type": "mysql",
    "host": config.mysql.host,
    "port": +config.mysql.port,
    "username": config.mysql.user,
    "password": config.mysql.password,
    "database": config.mysql.database,
    "synchronize": true,
    "entities": [
        SPlatUser,
        SPlatFightbfs,
        SPlatFightcardbfs,
        SPlatFightnumbfs
    ]
}).then(async connection => {

    await mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
    mongoose.connection.on('error', () => {
        throw new Error(`unable to connect to database: ${mongoUri}`);
    }).on('connected', () => {
        console.log('Mongodb connected');
    });

    console.log("Fetch user count from database...");
    const repository = await connection.manager.getRepository(SPlatUser);
    const count = await repository.count();
    console.log("User count:", count);
    const batchCount = Math.ceil(count / 1000);
    /** Migrate SPlatUser to WxUser */
    for (let i = 0; i < batchCount; ++i) {
        let splatUsers = await repository.find({
            skip: i * 1000,
            take: 1000,
        });

        let users = splatUsers.filter(m => m.wxid && !m.wxid.startsWith("player")).map(splatUser => {
            return new WxUserModel({
                userId: splatUser.id,
                nativeOpenId: splatUser.wxid,
                avatarUrl: splatUser.wxhead,
                gender: splatUser.wxsex,
                nickName: decodeURIComponent(splatUser.name),
                registeredAt: new Date(+splatUser.regTime * 1000),
                migrated: false,
            });
        });

        let result = await WxUserModel.insertMany(users).catch(error => {
            console.error(error);
        });

        if (!result) {
            console.error("Result is undefined");
        }
    }
    console.log("Migrate user completed.");

    console.log("Fetch rank role data from database...");
    const rankRoleRepository = await connection.manager.getRepository(SPlatFightcardbfs);
    const rankRoleCount = await rankRoleRepository.count();
    console.log("Rank role count:", rankRoleCount);
    const rankRoleBatchCount = Math.ceil(rankRoleCount / 1000);
    /** Migrate SPlatFightcardbfs to Rank */
    for (let i = 0; i < rankRoleBatchCount; ++i) {
        let rankRoles = await rankRoleRepository.find({
            skip: i * 1000,
            take: 1000,
        });

        let ranks = rankRoles.map(rank => {
            return new RankModel({
                userId: +rank.userId,
                mode: 0,
                role: rank.cardId,
                countWin: rank.wins,
                countTotal: rank.wins + rank.losts,
                winRate: rank.bf,
            });
        });

        let result = await RankModel.insertMany(ranks).catch(error => {
            console.error(error);
        });

        if (!result) {
            console.error("SPlatFightcardbfs Result is undefined");
        }
    }
    console.log("Migrate SPlatFightcardbfs to Rank completed.");

    console.log("Fetch rank mode data from database...");
    const rankModeRepository = await connection.manager.getRepository(SPlatFightnumbfs);
    const rankModeCount = await rankModeRepository.count();
    console.log("Rank mode count:", rankModeCount);
    const rankModeBatchCount = Math.ceil(rankModeCount / 1000);
    /** Migrate SPlatFightnumbfs to Rank */
    for (let i = 0; i < rankModeBatchCount; ++i) {
        let rankModes = await rankModeRepository.find({
            skip: i * 1000,
            take: 1000,
        });

        let ranks = rankModes.map(rank => {
            return new RankModel({
                userId: +rank.userId,
                mode: rank.roles,  // 6/7/8
                role: 0,
                countWin: rank.wins,
                countTotal: rank.wins + rank.losts,
                winRate: rank.bf,
            });
        });

        let result = await RankModel.insertMany(ranks).catch(error => {
            console.error(error);
        });

        if (!result) {
            console.error("SPlatFightnumbfs Result is undefined");
        }
    }
    console.log("Migrate SPlatFightnumbfs to Rank completed.");

    console.log("Fetch rank whole data from database...");
    const rankRepository = await connection.manager.getRepository(SPlatFightbfs);
    const rankCount = await rankRepository.count();
    console.log("Rank count:", rankCount);
    const rankBatchCount = Math.ceil(rankCount / 1000);
    /** Migrate SPlatFightnumbfs to Rank */
    for (let i = 0; i < rankBatchCount; ++i) {
        let rankModels = await rankRepository.find({
            skip: i * 1000,
            take: 1000,
        });

        let ranks = rankModels.map(rank => {
            return new RankModel({
                userId: +rank.userId,
                mode: 0,  // 0 represents all of modes
                role: 0,  // 0 represents all of roles
                countWin: rank.wins,
                countTotal: rank.wins + rank.losts,
                winRate: rank.bf,
            });
        });

        let result = await RankModel.insertMany(ranks).catch(error => {
            console.error(error);
        });

        if (!result) {
            console.error("SPlatFightbfs Result is undefined");
        }
    }
    console.log("Migrate SPlatFightbfs to Rank completed.");

}).catch(error => console.log(error));
