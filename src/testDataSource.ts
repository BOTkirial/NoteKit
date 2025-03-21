import "reflect-metadata";
import { DataSource } from "typeorm";
import User from "./entity/User";
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

    entities: [User],
    subscribers: [BaseSubscriber],
})

export default testDataSource;