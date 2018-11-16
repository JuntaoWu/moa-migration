import "reflect-metadata";
import { createConnection } from "typeorm";
import * as mongoose from "mongoose";

import { config } from './config/config';
import { SPlatUser } from "./entities/s_plat_user";
import WxUserModel, { WxUser } from "./models/wxuser.model";

const mongoUri = config.mongo.host;

createConnection({
    "name": "default",
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "sa",
    "password": "opensuse",
    "database": "sky_gdjzj",
    "synchronize": true,
    "entities": [
      SPlatUser
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
    const batchCount = Math.ceil(count / 1000);

    for (let i = 0; i < batchCount; ++i) {
        let splatUsers = await repository.find({
            skip: i * 1000,
            take: 1000,
        });

        let users = splatUsers.map(splatUser => {
            return new WxUserModel({
                nativeOpenId: splatUser.wxid,
                avatarUrl: splatUser.wxhead,
                nickName: decodeURIComponent(splatUser.name),
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

}).catch(error => console.log(error));
