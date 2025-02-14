import "reflect-metadata";
import { DataSource } from "typeorm";
import AccessMatrix from "./entity/AccessMatrix";
import Action from "./entity/Action";
import LevelOfPermission from "./entity/LevelOfPermission";
import Note from "./entity/Note";
import Role from "./entity/Role";
import Team from "./entity/Team";
import TeamNesting from "./entity/TeamNesting";
import TeamRole from "./entity/TeamRole";
import User from "./entity/User";
import UserRole from "./entity/UserRole";
import UserTeam from "./entity/UserTeam";
import path from "path";
import { BaseSubscriber } from "./entity/subscribers/BaseSubscriber";

const appDataSource: DataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    synchronize: false,
    logging: true,

    entities: [AccessMatrix, Action, LevelOfPermission, Note, Role, Team, TeamNesting, TeamRole, User, UserRole, UserTeam],
    migrations: [path.join(__dirname, '/migration/*')],
    subscribers: [BaseSubscriber],
})

export default appDataSource;