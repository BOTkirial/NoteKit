import { NextApiRequest, NextApiResponse } from 'next';
import { AppDataSource } from '../data-source';

/**
 * Custom route handler
 * Should be user with every API route
 * Used instead of middleware.ts because middleware.ts cannot handle typeorm initialization because of restrictions with Edge runtime
 */
export const withApiMiddleware = (handler: (req: NextApiRequest, res: NextApiResponse) => void) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {

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