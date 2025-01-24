import { AppDataSource } from "../../src/data-source";
import User from "../../src/entity/User";

const runUsers = async () => {

    if (!AppDataSource.isInitialized)
        await AppDataSource.initialize();

    const count = await AppDataSource.manager.count(User);
    if (count > 0) {
        return;
    }

    // admin
    const admin = new User()
        .setName("admin")
        .setPassword(process.env.DEFAULT_ADMIN_PASSWORD);

    AppDataSource.manager.save(admin);

    // user
    const user = new User()
        .setName("user")
        .setPassword(process.env.DEFAULT_USER_PASSWORD);

    AppDataSource.manager.save(user);


}

export default runUsers;