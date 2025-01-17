import { AppDataSource } from "../data-source";
import User from "../entity/User";

export const createUser = async (name: string, password: string, email?: string) => {

    const user = new User();
    user.setName(name);
    user.setPassword(password)
    if(email)
        user.setEmail(email);

    try {
        await AppDataSource.manager.save(user);
    } catch (error) {
        throw new Error('An error occured when creating the user : ' + error);
    }

}