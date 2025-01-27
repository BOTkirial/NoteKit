import { AppDataSource } from '../../data-source';
import checkAuthentificationAndDatabase from './checkAuthentificationAndDatabase';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Custom route handler
 * Should be used with every API route
 * Used instead of middleware.ts because middleware.ts cannot handle typeorm initialization because of restrictions with Edge runtime
 */
export const useApiMiddleware = (handler: (req: NextRequest, res: NextResponse) => void) => {
    return async (req: NextRequest, res: NextResponse) => {
      
        await checkAuthentificationAndDatabase();

        // Proceed to the actual handler
        return handler(req, res);
    };
};