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
import { BaseSubscriber } from "./entity/subscribers/BaseSubscriber";

/**
 * Defines a dataSource used during testing
 * Used because of a bug "cannot use import statement outside of module" when using the appDataSource during tests
 * It was caused by the loading of the migrations array
 * So the only difference between testDataSource and appDataSource is that testDataSource doesn't load the migrations to fix that bug
*/
const testDataSource: DataSource = new DataSource({
    type: "sqlite",
    database: ":memory:",

    synchronize: true,
    logging: false,

    entities: [AccessMatrix, Action, LevelOfPermission, Note, Role, Team, TeamNesting, TeamRole, User, UserRole, UserTeam],
    subscribers: [BaseSubscriber],
})

export default testDataSource;