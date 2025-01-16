import { NextApiRequest, NextApiResponse } from 'next';
import { AppDataSource } from '../data-source';
import { useAuthentification } from './authentificationService';

/**
 * Custom route handler
 * Should be used with every API route
 * Used instead of middleware.ts because middleware.ts cannot handle typeorm initialization because of restrictions with Edge runtime
 */
export const useApiMiddleware = (handler: (req: NextApiRequest, res: NextApiResponse) => void) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {

        // check if the user is authenticated
        const session = await useAuthentification();
        if(session === null)
            throw new Error("Not authenticated")

        // initializes the database connection before any requests
        try {
            if(!AppDataSource.isInitialized)
                await AppDataSource.initialize();
        } catch (error:any) {
            throw new Error("An error occured when initializing database connection")
        }

        // Proceed to the actual handler
        return handler(req, res);
    };
};