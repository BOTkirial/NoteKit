import User from "@entity/User";
import DataSourceManager from "src/DataSourceManager";
import { getSession } from "./authentification/nextAuthConfig";
import ApiRequestParams from "src/types/ApiRequestParams";
import { withRequestParams } from "./api.service";


/**
 * Creates a user in the database
 */
export const createUser = async (name: string, password: string, email?: string) => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const user = new User();
    user.setName(name);
    user.setPassword(password)
    if(email) {
        user.setEmail(email);
    }
    try {
        await dataSource.manager.save(user);
    } catch (error) {
        throw new Error('An error occured when creating the user : ' + error);
    }
}

/**
 * Find a user in the database by it's id
 */
export const getUserById = async (userId: number): Promise<User | null> => {
  const dataSource = await DataSourceManager.getQueryRunner();
  const user = await dataSource.manager.findOne(User, { where: { id: userId }, select: { id: true, name: true, email: true } } );
    return user;
}

/**
 * Finds a user in the database by it's name
 */
export const getUserByName = async (userName: string): Promise<User | null> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const user = await dataSource.manager.findOneBy(User,  { name: userName } );
    return user;
}

/**
 * Updates a user in the database
 */
export const updateUser = async (user:User, updates: Partial<User>): Promise<User> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const newUser = {...user, ...updates};
    try {
        await dataSource.manager.save(newUser);
    } catch (error) {
        throw new Error('An error occured when updating the user ' + user.getName() + ' : ' + error);
    }
    return newUser as User;
}

/**
 * Removes a user from the database
 */
export const deleteUser = async (user:User): Promise<void> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    await dataSource.manager.remove(user);
}

/**
 * Retrieve all the users in the database
 */
export const getAllUsers = async (parameters?: ApiRequestParams): Promise<Array<User>> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const tabUsers = await dataSource.manager.find(User, withRequestParams({}, parameters));
    if(tabUsers === null) {
        throw new Error("No users found in the database")
    }
    return tabUsers;
}

/**
 * Retrieve the currently connected user
 * Throws if unauthenticated
 */
export const getCurrentUser = async(): Promise<User> => {

  const userSession = await getSession();

  if(!userSession) {
    throw new Error("Unauthenticated");
  }

  const user = await getUserById((userSession.user as any).id);

  if(!user) {
    throw new Error("User does not exist");
  }

  return user;

}
