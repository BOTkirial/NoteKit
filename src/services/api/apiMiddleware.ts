import { NextRequest } from 'next/server';
import { useAuthentification } from './nextAuthConfig';

/**
 * Custom route handler
 * Should be used with every API route
 * Used instead of middleware.ts because middleware.ts cannot handle typeorm initialization because of restrictions with Edge runtime
 */
export const useApiMiddleware = (handler: (req: NextRequest) => void) => {
    return async (req: NextRequest) => {
        await checkAuthentification();
        return handler(req);
    };
};

/**
 * Simple method that throws an error if the user isn't authenticated
 * Uses NextAuth
 */
const checkAuthentification = async () => {
    const session = await useAuthentification();
    if(session === null) {
        console.info("Unauthorized");
        throw new Error("Unauthorized");
    }
    console.info("Authorized");
}