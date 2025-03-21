import { NextRequest } from 'next/server';
import { getSession } from './nextAuthConfig';

/**
 * Custom route handler
 * Should be used with every API route
 * Used instead of middleware.ts because middleware.ts doesn't support checking authentification via sessions with nextAuth
 */
export const withApiMiddleware = (handler: (req: NextRequest, params: any) => void) => {
    return async (req: NextRequest, params: any) => {
        await checkAuthentification();
        return handler(req, params?.params);
    };
};

/**
 * Simple method that throws an error if the user isn't authenticated
 * Uses NextAuth
 */
const checkAuthentification = async () => {
    const session = await getSession();
    if(session === null) {
        console.info("Unauthorized");
        throw new Error("Unauthorized");
    }
    console.info("Authorized");
}