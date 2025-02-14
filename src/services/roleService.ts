import DataSourceManager from "../DataSourceManager"
import AccessMatrix from "../entity/AccessMatrix"
import Action from "../entity/Action"
import LevelOfPermission from "../entity/LevelOfPermission"
import Role from "../entity/Role"
import { saveWithTransaction } from "./api/typeOrmService"

/**
 * Creates a role in the database
 * Optionnaly also sets some level of permission for actions if provided
 */
export const createRole = async (roleName: string, roleDescription?: string, tabAccessMatrix?: { action: Action, lop: LevelOfPermission }[]):Promise<void> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    // create the role and saves it to the database
    const role = new Role();
    role.setName(roleName);
    role.setDescription(roleDescription);
    // if an access matrix is provided
    let _tabAccessMatrix: AccessMatrix[];
    if(tabAccessMatrix !== undefined) {
        _tabAccessMatrix = tabAccessMatrix.map(el => {
            const am = new AccessMatrix();
            am.setAction(el.action);
            am.setLevelOfPermission(el.lop);
            am.setRole(role);
            return am;
        })
    }
    await dataSource.manager.save([role, _tabAccessMatrix].filter(el => el !== undefined));
}

/**
 * Finds a role in the database by it's name
 */
export const getRoleByName = async (roleName: string): Promise<Role> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const role = await dataSource.manager.findOneBy(Role, { name: roleName });
    if (role === null) {
        throw new Error("No role found in the database")
    }
    return role;
}

/**
 * Finds a role in the database by it's id
 */
export const getRoleById = async (roleId: number): Promise<Role> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const role = await dataSource.manager.findOneBy(Role, { id: roleId });
    if (role === null) {
        throw new Error("No role found in the database")
    }
    return role;
}

/**
 * Updates a role in the database
 */
export const updateRole = async (role: Role, updates: Partial<Role>): Promise<Role> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const newRole = {...role, ...updates};
    try {
        await dataSource.manager.save(newRole);
    } catch (error) {
        throw new Error('An error occured when updating the role ' + role.getName() + ' : ' + error);
    }
    return newRole as Role;
}

/**
 * Safely deletes a role from the database
 */
export const deleteRole = async (role: Role): Promise<void> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    await dataSource.manager.remove(role);
}

/**
 * Defines the level of permission a role grants for a given action
 */
export const setRoleLopForAction = async (role: Role, lop: LevelOfPermission, action: Action):Promise<void> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const existingAccessMatrix = await dataSource.manager.findOneBy(AccessMatrix, {action: action, role: role});
    // if a Level of Permission is already defined for the given role and action, updates it
    if(!!existingAccessMatrix) {
        existingAccessMatrix.setLevelOfPermission(lop);
        await  dataSource.manager.save(existingAccessMatrix);
        return;
    }
    // otherwise creates it
    const accessMatrix = new AccessMatrix();
    accessMatrix.setRole(role);
    accessMatrix.setAction(action);
    accessMatrix.setLevelOfPermission(lop);
    await dataSource.manager.save(accessMatrix);
}

/**
 * Finds what level of permission a role grants for a given action
 */
export const getRoleLopForAction = async (role: Role, action: Action):Promise<Role | null> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const accessMatrix = await dataSource.manager.findOneBy(AccessMatrix, {action: action, role: role});
    // if a corresponding access matrix is found, returns it's level of permission
    if(!!accessMatrix) {
        return accessMatrix.getLevelOfPermission();
    }
    // otherwise returns null
    return null;
}
