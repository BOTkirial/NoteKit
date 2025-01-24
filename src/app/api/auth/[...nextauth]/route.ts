import NextAuth, { NextAuthOptions } from "next-auth";
import { config } from "../../../../services/api/nextAuthConfig";

const handler = NextAuth(config)

export { handler as GET, handler as POST }
