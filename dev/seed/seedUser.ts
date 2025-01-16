import { AppDataSource } from "../../src/data-source";
import User from "../../src/entity/User";
import { createUser } from "../../src/services/userService";

const runUsers = async () => {

    if(!AppDataSource.isInitialized)
        await AppDataSource.initialize();

    const count = await AppDataSource.manager.count(User);
    if(count > 0) {
        return;
    }

    // creates the default user named "admin" with admin privileges
    await createUser("admin", process.env.DEFAULT_ADMIN_PASSWORD);
    
    // creates the default user named "user" with almost no privileges
    await createUser("user", process.env.DEFAULT_USER_PASSWORD);


}

export default runUsers;