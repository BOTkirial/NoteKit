import { QueryRunner } from "typeorm";
import DataSourceManager from "../../src/DataSourceManager";
import User from "../../src/entity/User";

const runUsers = async (dataSource: QueryRunner) => {

    const count = await dataSource.manager.count(User);
    if (count > 0) {
        return;
    }

    // admin
    const admin = new User()
        .setName("admin")
        .setPassword(process.env.DEFAULT_ADMIN_PASSWORD);

    await dataSource.manager.save(admin);

    // user
    const user = new User()
        .setName("user")
        .setPassword(process.env.DEFAULT_USER_PASSWORD);

    await dataSource.manager.save(user);


}

export default runUsers;