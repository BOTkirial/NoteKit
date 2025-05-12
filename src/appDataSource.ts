import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./entity/User";
import path from "path";
import { BaseSubscriber } from "./entity/subscribers/BaseSubscriber";
import AccessMatrix from "./entity/AccessMatrix";
import Action from "./entity/Action";
import LevelOfPermission from "./entity/LevelOfPermission";
import Note from "./entity/Note";
import Role from "./entity/Role";
import Team from "./entity/Team";
import TeamNesting from "./entity/TeamNesting";
import TeamRole from "./entity/TeamRole";
import UserRole from "./entity/UserRole";
import UserTeam from "./entity/UserTeam";

const appDataSource: DataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    synchronize: false,
    logging: true,

    entities: [User, AccessMatrix, Action, LevelOfPermission, Note, Role, Team, TeamNesting, TeamRole, UserRole, UserTeam],
    migrations: [path.join(__dirname, '/migration/*')],
    subscribers: [BaseSubscriber],
})

export default appDataSource;