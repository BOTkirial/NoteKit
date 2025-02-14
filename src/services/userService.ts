import DataSourceManager from "../DataSourceManager";
import User from "../entity/User"

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
export const getUserById = async (userId: number): Promise<User> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const user = await dataSource.manager.findOneBy(User,  { id: userId } );
    if(user === null) {
        throw new Error("No user found in the database")
    }
    return user;
}

/**
 * Finds a user in the database by it's name
 */
export const getUserByName = async (userName: string): Promise<User> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const user = await dataSource.manager.findOneBy(User,  { name: userName } );
    if(user === null) {
        throw new Error("No user found in the database")
    }
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