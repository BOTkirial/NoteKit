import Action from "../entity/Action"
import LevelOfPermission from "../entity/LevelOfPermission"
import Role from "../entity/Role"

/**
 * Creates a role in the database
 * Optionnaly also sets some level of permission for actions if provided
 */
export const createRole = (roleName: string, accessMatrix?:{action: Action, lop: LevelOfPermission}[]) => {
    
}

/**
 * Finds a role in the database by it's name
 */
export const getRoleByName = (roleName: string) => {
    
}

/**
 * Finds a role in the database by it's id
 */
export const getRoleById = (roleId: number) => {
    
}

/**
 * Updates a role in the database
 */
export const updateRole = (role: Role, updates: any) => {
    
}

/**
 * Safely deletes a role from the database
 */
export const deleteRole = (role: Role) => {
    
}

/**
 * Defines the level of permission a role grants for a given action
 */
export const setRoleLopForAction = (role: Role, lop: LevelOfPermission, action: Action) => {
    
}

/**
 * Finds what level of permission a role grants for a given action
 */
export const getRoleLopForAction = (role: Role, action: Action) => {
    
}
