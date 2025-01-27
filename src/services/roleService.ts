import { AppDataSource } from "../data-source"
import AccessMatrix from "../entity/AccessMatrix"
import Action from "../entity/Action"
import LevelOfPermission from "../entity/LevelOfPermission"
import Role from "../entity/Role"
import checkAuthentificationAndDatabase from "./api/checkAuthentificationAndDatabase"
import { saveWithTransaction } from "./api/typeOrmService"

/**
 * Creates a role in the database
 * Optionnaly also sets some level of permission for actions if provided
 */
export const createRole = async (roleName: string, roleDescription?: string, tabAccessMatrix?: { action: Action, lop: LevelOfPermission }[]):Promise<void> => {
    await checkAuthentificationAndDatabase();
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
    saveWithTransaction([role, _tabAccessMatrix]);
}

/**
 * Finds a role in the database by it's name
 */
export const getRoleByName = async (roleName: string): Promise<Role> => {
    await checkAuthentificationAndDatabase();
    const role = await AppDataSource.manager.findOneBy(Role, { name: roleName });
    if (role === null) {
        throw new Error("No role found in the database")
    }
    return role;
}

/**
 * Finds a role in the database by it's id
 */
export const getRoleById = async (roleId: number): Promise<Role> => {
    await checkAuthentificationAndDatabase();
    const role = await AppDataSource.manager.findOneBy(Role, { id: roleId });
    if (role === null) {
        throw new Error("No role found in the database")
    }
    return role;
}

/**
 * Updates a role in the database
 */
export const updateRole = async (role: Role, updates: Partial<Role>): Promise<Role> => {
    await checkAuthentificationAndDatabase();
    
    const newRole = {...role, ...updates};

    return newRole as Role;
}

/**
 * Safely deletes a role from the database
 */
export const deleteRole = async (role: Role) => {
    await checkAuthentificationAndDatabase();

}

/**
 * Defines the level of permission a role grants for a given action
 */
export const setRoleLopForAction = async (role: Role, lop: LevelOfPermission, action: Action) => {
    await checkAuthentificationAndDatabase();

}

/**
 * Finds what level of permission a role grants for a given action
 */
export const getRoleLopForAction = async (role: Role, action: Action) => {
    await checkAuthentificationAndDatabase();

}
