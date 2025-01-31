import { AppDataSource } from "../data-source"
import Role from "../entity/Role"
import Team from "../entity/Team"
import TeamRole from "../entity/TeamRole"
import checkAuthentificationAndDatabase from "./api/checkAuthentificationAndDatabase"

/**
 * Grants a given role to a given team
 * Can only add a role that gives lesser or equivalent permissions to that of the user giving the role
 */
export const addRoleToTeam = async (role:Role, team: Team):Promise<void> => {
    await checkAuthentificationAndDatabase();
    // checks if the team doesn't already have the role
    if(!!await AppDataSource.manager.findOneBy(TeamRole, { team: team, role: role })) {
        return;
    }
    // if the team doesn't already have the role
    const teamRole = new TeamRole();
    teamRole.setRole(role);
    teamRole.setTeam(team);
    try {
        AppDataSource.manager.save(teamRole);
    } catch (error) {
        throw new Error('An error occured when adding the role ' + role.getName() + ' to the team ' + team.getName() + ' : ' + error);
    }
}

/**
 * Removes a given role from a given team
 */
export const removeRoleFromTeam = async (role: Role, team: Team):Promise<void> => {
    await checkAuthentificationAndDatabase();
    const teamRole = await AppDataSource.manager.findOneBy(TeamRole, { team: team, role: role });
    if(!teamRole) {
        return;
    }
    try {
        AppDataSource.manager.remove(teamRole)
    } catch (error) {
        throw new Error('An error occured when removing the role ' + role.getName() + ' from the team ' + team.getName() + ' : ' + error);
    }
}

/**
 * Returns all the roles of the given team
 */
export const getTeamRoles = async (team: Team):Promise<Role[]> => {
    await checkAuthentificationAndDatabase();
    const teamRoles = await AppDataSource.manager.findBy(TeamRole, { team: team });
    return teamRoles.map(tm => tm.getRole());
}

/**
 * Returns all the teams that have the given role
 */
export const getTeamsByRole = async (role: Role):Promise<Team[]> => {
    await checkAuthentificationAndDatabase();
    const teamRoles = await AppDataSource.manager.findBy(TeamRole, { role: role });
    return teamRoles.map(tm => tm.getTeam());
}