import DataSourceManager from "../DataSourceManager";
import Role from "../entity/Role"
import Team from "../entity/Team"
import TeamRole from "../entity/TeamRole"

/**
 * Grants a given role to a given team
 * Can only add a role that gives lesser or equivalent permissions to that of the user giving the role
 */
export const addRoleToTeam = async (role:Role, team: Team):Promise<void> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    // checks if the team doesn't already have the role
    if(!!await dataSource.manager.findOneBy(TeamRole, { team: team, role: role })) {
        return;
    }
    // if the team doesn't already have the role
    const teamRole = new TeamRole();
    teamRole.setRole(role);
    teamRole.setTeam(team);
    try {
        dataSource.manager.save(teamRole);
    } catch (error) {
        throw new Error('An error occured when adding the role ' + role.getName() + ' to the team ' + team.getName() + ' : ' + error);
    }
}

/**
 * Removes a given role from a given team
 */
export const removeRoleFromTeam = async (role: Role, team: Team):Promise<void> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const teamRole = await dataSource.manager.findOneBy(TeamRole, { team: team, role: role });
    if(!teamRole) {
        return;
    }
    try {
        dataSource.manager.remove(teamRole)
    } catch (error) {
        throw new Error('An error occured when removing the role ' + role.getName() + ' from the team ' + team.getName() + ' : ' + error);
    }
}

/**
 * Returns all the roles of the given team
 */
export const getTeamRoles = async (team: Team):Promise<Role[]> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const teamRoles = await dataSource.manager.findBy(TeamRole, { team: team });
    return teamRoles.map(tm => tm.getRole());
}

/**
 * Returns all the teams that have the given role
 */
export const getTeamsByRole = async (role: Role):Promise<Team[]> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const teamRoles = await dataSource.manager.findBy(TeamRole, { role: role });
    return teamRoles.map(tm => tm.getTeam());
}