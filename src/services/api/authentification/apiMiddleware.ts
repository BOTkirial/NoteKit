import { NextRequest, NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";

/**
 * Custom route handler
 * Should be used with every API route
 * Used instead of middleware.ts because middleware.ts doesn't support checking authentification via sessions with nextAuth
 */
export const withApiMiddleware = (handler: (req: NextRequest, params: any) => void) => {
    return async (req: NextRequest, params: any) => {
        try {
            await checkAuthentification(req);
        } catch(e) {
            return NextResponse.json({message: "Unauthorized"}, { status: 401 });
        }
        return handler(req, params?.params);
    };
};

/**
 * Simple method that throws an error if the user isn't authenticated
 * Uses NextAuth
 */
const checkAuthentification = async (request: NextRequest) => {
    const token = await getToken({req: request })
    if(token === null) {
        console.info("Unauthorized");
        throw new Error("Unauthorized");
    }
    console.info("Authorized");
}