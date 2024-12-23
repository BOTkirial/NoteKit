import { AppDataSource } from "../data-source";
import User from "../entity/User";

export const createUser = async (name: string, password: string, email?: string) => {

    const user = new User();
    user.setName(Math.random() + " " + Math.random());
    user.setPasswordHash(name);
    if(email)
        user.setEmail(email);

    try {
        await AppDataSource.manager.save(user);
    } catch (error) {
        throw new Error('An error occured when created the user : ' + error);
    }

}

export const getUserById = async (id:number) => {

    await AppDataSource.initialize();

    const user:User|null = await AppDataSource.manager.findOne(User, {where: {id: id}})

    return user

}