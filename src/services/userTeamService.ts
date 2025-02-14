import DataSourceManager from "../DataSourceManager";
import Team from "../entity/Team"
import User from "../entity/User"
import UserTeam from "../entity/UserTeam";

/**
 * Adds a user to a team
 */
export const addUserToTeam = async (user: User, team: Team): Promise<void> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    // checks if the user is already in the team
    const userTeam = await dataSource.manager.findOneBy(UserTeam, {user: user, team: team});
    if(!!userTeam) {
        return;
    }
    const newUserTeam = new UserTeam();
    newUserTeam.setUser(user);
    newUserTeam.setTeam(team);
    try {
        await dataSource.manager.save(newUserTeam);
    } catch (error) {
        throw new Error('An error occured when adding the user ' + user.getName() + ' to the team ' + team.getName() + ' : ' + error);
    }
}

/**
 * Removes a user from a team
 */
export const removeUserFromTeam = async (user: User, team: Team): Promise<void> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    // checks if the user is in the team before removing
    const userTeam = await dataSource.manager.findOneBy(UserTeam, {user: user, team: team});
    if(!userTeam) {
        return;
    }
    try {
        await dataSource.manager.remove(userTeam);
    } catch (error) {
        throw new Error('An error occured when removing the user ' + user.getName() + ' from the team ' + team.getName() + ' : ' + error);
    }
}

/**
 * Returns all the teams the user is in
 */
export const getUserTeams = async (user:User):Promise<Team[]> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const userTeams = await dataSource.manager.findBy(UserTeam, {user: user});
    return userTeams.map(ut => ut.getTeam());
}

/**
 * Returns all the users inside the given team
 */
export const getTeamUsers = async (team: Team):Promise<User[]> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const userTeams = await dataSource.manager.findBy(UserTeam, {team: team});
    return userTeams.map(ut => ut.getUser());
}