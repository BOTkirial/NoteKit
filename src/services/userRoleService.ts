import DataSourceManager from "../DataSourceManager";
import AccessMatrix from "../entity/AccessMatrix";
import Action from "../entity/Action"
import LevelOfPermission from "../entity/LevelOfPermission";
import Role from "../entity/Role";
import User from "../entity/User"
import UserRole from "../entity/UserRole";

/**
 * Adds a role to a user
 * Can only add a role that gives lesser or equivalent permissions to that of the user giving the role
 */
export const addRoleToUser = async (role: Role, user: User): Promise<void> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    // checks if the user already has the role
    const userRole = await dataSource.manager.findOneBy(UserRole, {user: user, role: role});
    if(!!userRole) {
        return;
    }
    const newUserRole = new UserRole();
    newUserRole.setUser(user);
    newUserRole.setRole(role);
    try {
        await dataSource.manager.save(newUserRole);
    } catch (error) {
        throw new Error('An error occured when adding the role ' + role.getName() + ' to the user ' + user.getName() + ' : ' + error);
    }
}

/**
 * Removes a role from a user
 */
export const removeRoleFromUser = async (role: Role, user: User): Promise<void> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    // checks has the role before removing
    const userRole = await dataSource.manager.findOneBy(UserRole, {user: user, role: role});
    if(!userRole) {
        return;
    }
    try {
        await dataSource.manager.remove(userRole);
    } catch (error) {
        throw new Error('An error occured when removing the role ' + role.getName() + ' from the user ' + user.getName() + ' : ' + error);
    }
}

/**
 * Returns all the roles of the User (either his own, or his team's)
 */
export const getUserRoles = async (user:User): Promise<Role[]> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    console.log(user)
    // const userRoles = await dataSource.manager.findBy(UserRole, {user: user});
    const userRoles = await dataSource.manager.find(UserRole, { where: {user: {id: user.id}}, relations: {role: true} })
    console.log("getUserRoles")
    console.log(userRoles)
    return userRoles.map(ur => ur.getRole());
}

/**
 * Returns the highest level of permission a given user has for a given action
 * Checks accross all the user's roles and his team's roles
 */
export const getUserLopAction = async (user:User, action: Action): Promise<LevelOfPermission> => {
    const dataSource = await DataSourceManager.getQueryRunner();

    const userRoles = (await getUserRoles(user)).map(role => role.id);

    console.log(userRoles);

    const queryBuilder = dataSource.manager.createQueryBuilder();
    const result = await queryBuilder
        .from(AccessMatrix, "am")
        .leftJoin("am.role", "amr")
        .leftJoin("am.action", "ama")
        .leftJoin("am.levelOfPermission", "amlop")
        .where("am.role in (:...userRoles)")
        .setParameter("userRoles", userRoles)
        .select("amr.name as role_name, jsonb_agg(jsonb_build_object('ama_name', ama.name, 'amlop_name', amlop.name)) as permissions")
        .groupBy("role_name")
        .execute();

    console.log(result);

    return result;
        

}