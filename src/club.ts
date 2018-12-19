import "reflect-metadata";
import { createConnection } from "typeorm";
import * as mongoose from "mongoose";

import { config } from './config/config';
import ClubModel from "./models/club.model";

const mongoUri = config.mongo.host;

async function migrateClub() {
    await mongoose.connect(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
    mongoose.connection.on('error', () => {
        throw new Error(`unable to connect to database: ${mongoUri}`);
    }).on('connected', () => {
        console.log('Mongodb connected');
    });

    ClubModel.find().then(clubs => {
        clubs.forEach(club => {
            let games = [];
            if (club.game_1) {
                games.push(1);
            }
            if (club.game_2) {
                games.push(2);
            }
            if (club.game_3) {
                games.push(3);
            }
            if (club.game_4) {
                games.push(4);
            }
            club.games = games;
            club.save();
        });
    });

    console.log("Find ClubModel completed.");
}

migrateClub().then(() => {
    console.log("migrateClub finished.");
}).catch((error) => {
    console.error("migrateClub error", error);
});



