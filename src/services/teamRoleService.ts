import { AppDataSource } from "../data-source"
import Role from "../entity/Role"
import Team from "../entity/Team"
import checkAuthentificationAndDatabase from "./api/checkAuthentificationAndDatabase"

/**
 * Grants a given role to a given team
 */
export const addRoleToTeam = async (role:Role, team: Team) => {
        await checkAuthentificationAndDatabase();

}

/**
 * Removes a given role to a given team
 */
export const removeRoleFromTeam = async (role: Role, team: Team) => {
        await checkAuthentificationAndDatabase();

}

/**
 * Returns all the roles of the given team
 */
export const getTeamRoles = async (team: Team):Promise<Role[]> => {
    await checkAuthentificationAndDatabase();
}

/**
 * Returns all the teams that have the given role
 */
export const getTeamsByRole = async (role: Role):Promise<Team[]> => {
    await checkAuthentificationAndDatabase();
}