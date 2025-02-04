import { AppDataSource } from "../../data-source";
import { useAuthentification } from "./nextAuthConfig";

const checkAuthentificationAndDatabase = async () => {

    // checks if the user is authenticated
    const session = await useAuthentification();
    if(session === null) {
        console.info("Unauthorized");
        throw new Error("Unauthorized");
    }

    console.info("Authorized");

    // initializes the database connection before any requests
    try {
        if(!AppDataSource.isInitialized)
            await AppDataSource.initialize();
    } catch (error:any) {
        console.info("An error occured when initializing database connection : " + error);
        throw new Error("An error occured when initializing database connection : " + error)
    }
    
    console.info("Database connection OK");

}

export default checkAuthentificationAndDatabase;