import { AppDataSource } from "../../src/data-source";
import { createUser } from "../../src/services/userService";

const runUsers = async () => {

    if(!AppDataSource.isInitialized)
        await AppDataSource.initialize();

    // creates the default user named "admin" with admin privileges
    await createUser("admin", process.env.DEFAULT_ADMIN_PASSWORD);


}

export default runUsers;