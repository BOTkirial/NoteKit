import { AppDataSource } from "../../src/data-source";
import Role from "../../src/entity/Role";
import User from "../../src/entity/User";
import UserRole from "../../src/entity/UserRole";

const runUserRoles = async () => {

    if (!AppDataSource.isInitialized)
        await AppDataSource.initialize();

    const count = await AppDataSource.manager.count(UserRole);
    if (count > 0) {
        return;
    }

    // user
    const userRole = await AppDataSource.manager.findOne(Role, { where: {name: "user"} });
    if(!userRole) {
        throw new Error("Role 'user' was not found in the database");
    }
    
    const user = await AppDataSource.manager.findOne(User, { where: {name: "user"} });
    if(!user) {
        throw new Error("User 'user' was not found in the database");
    }

    const userRoleUser = new UserRole();
    userRoleUser.setRole(userRole);
    userRoleUser.setUser(user);
    await AppDataSource.manager.save(userRoleUser);
    
    // admin
    const adminRole = await AppDataSource.manager.findOne(Role, { where: {name: "administrator"} });
    if(!adminRole) {
        throw new Error("Role 'administrator' was not found in the database");
    }
    
    const admin = await AppDataSource.manager.findOne(User, { where: {name: "admin"} });
    if(!adminRole) {
        throw new Error("User 'admin' was not found in the database");
    }

    const userRoleAdmin = new UserRole();
    userRoleAdmin.setRole(adminRole);
    userRoleAdmin.setUser(admin);
    await AppDataSource.manager.save(userRoleAdmin);

}

export default runUserRoles;