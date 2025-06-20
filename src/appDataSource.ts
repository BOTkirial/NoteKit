import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./entity/User";
import path from "path";
import { BaseSubscriber } from "./entity/subscribers/BaseSubscriber";
import Note from "./entity/Note";
import SharedNote from "./entity/SharedNote";

const appDataSource: DataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    synchronize: false,
    logging: true,

    entities: [User, Note, SharedNote],
    migrations: [path.join(__dirname, '/migration/*')],
    subscribers: [BaseSubscriber],
})

export default appDataSource;