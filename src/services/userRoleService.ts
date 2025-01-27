import Action from "../entity/Action"
import User from "../entity/User"

/**
 * Adds a role to a user
 */
export const addRoleToUser = () => {
    
}

/**
 * Removes a role from a user
 */
export const removeRoleFromUser = () => {
    
}

/**
 * Returns all the roles of the User (either his own, or his team's)
 */
export const getUserRoles = (user:User) => {
    
}

/**
 * Returns the highest level of privilege a given user has for a given action
 * Checks accross all the user's roles and his team's roles
 */
export const getUserLopAction = (user:User, action: Action) => {
    
}