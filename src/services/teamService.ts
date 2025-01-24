import Team from "../entity/Team"
import User from "../entity/User"

/**
 * Creates a team in the database
 * Optionnaly adding several users to it on creation
 * Optionnaly gives it a parent team for a first level of nesting
 */
export const createTeam = (teamName: string, users?: User[], parentTeam?: Team) => {

}

/**
 * Finds a team in the database by it's id
 */
export const getTeamById = (teamId: number) => {

}

/**
 * Finds a team in the database by it's name
 */
export const getTeamByName = (teamName: string) => {

}

/**
 * Updates a team in the database
 */
export const updateTeam = (team: Team, updates: any) => {

}

/**
 * Safely deletes a team from the database
 */
export const deleteTeam = (team: Team) => {

}

/**
 * Adds a team to another team, allowing for nesting them
 */
export const addTeamToTeam = (team: Team, parentTeam: Team) => {

}

/**
 * Removes a team from another one, in case of nesting
 */
export const removeTeamFromTeam = (team: Team, parentTeam: Team) => {
    
}