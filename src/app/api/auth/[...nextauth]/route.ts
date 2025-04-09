import { config } from "@services/api/authentification/nextAuthConfig";
import NextAuth from "next-auth";

const handler = NextAuth(config)

export { handler as GET, handler as POST }
