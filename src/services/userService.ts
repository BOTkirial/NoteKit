import { AppDataSource } from "../data-source";
import User from "../entity/User"
import checkAuthentificationAndDatabase from "./api/checkAuthentificationAndDatabase";

/**
 * Creates a user in the database
 */
export const createUser = async (name: string, password: string, email?: string) => {
    await checkAuthentificationAndDatabase();
    const user = new User();
    user.setName(name);
    user.setPassword(password)
    if(email) {
        user.setEmail(email);
    }
    try {
        await AppDataSource.manager.save(user);
    } catch (error) {
        throw new Error('An error occured when creating the user : ' + error);
    }
}

/**
 * Find a user in the database by it's id
 */
export const getUserById = async (userId: number): Promise<User> => {
    await checkAuthentificationAndDatabase();
    const user = await AppDataSource.manager.findOneBy(User,  { id: userId } );
    if(user === null) {
        throw new Error("No user found in the database")
    }
    return user;
}

/**
 * Finds a user in the database by it's name
 */
export const getUserByName = async (userName: string): Promise<User> => {
    await checkAuthentificationAndDatabase();
    const user = await AppDataSource.manager.findOneBy(User,  { name: userName } );
    if(user === null) {
        throw new Error("No user found in the database")
    }
    return user;
}

/**
 * Updates a user in the database
 */
export const updateUser = async (user:User, updates: Partial<User>): Promise<User> => {
    await checkAuthentificationAndDatabase();
    const newUser = {...user, ...updates};
    try {
        await AppDataSource.manager.save(newUser);
    } catch (error) {
        throw new Error('An error occured when updating the user ' + user.getName() + ' : ' + error);
    }
    return newUser as User;
}

/**
 * Removes a user from the database
 */
export const deleteUser = async (user:User): Promise<void> => {
    await checkAuthentificationAndDatabase();
    await AppDataSource.manager.remove(user);
}