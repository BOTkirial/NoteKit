import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import { AppDataSource } from "../../data-source";
import User from "../../entity/User";

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const config = {
  providers: [
    CredentialsProvider({
      // the name of the authentification method
      name: 'Credentials',
      // the fields presented for this authentification method
      credentials: {
        username: { label: "Nom d'utilisateur", type: "text", placeholder: "Jane Doe" },
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials) {

        // initializes the database connection before any requests
        try {
          if (!AppDataSource.isInitialized)
            await AppDataSource.initialize();
        } catch (error: any) {
          throw new Error("An error occured when initializing database connection")
        }

        // Query to the database to check if the username is valid
        const dbUser = await AppDataSource.manager.findOneBy(User, { name: credentials.username });

        // If no user is registered to this username, the authentification fails
        if (!dbUser)
          return null;

        // Check the stored hash of the user's password against the calculated hash of the submitted password
        const areCredentialsValid = await bcrypt.compare(credentials.password, dbUser.getPassword())

        // If they don't match, the authentification fails
        if (!areCredentialsValid)
          return null;

        // If they match the authentification is successfull

        if (dbUser && areCredentialsValid)
          return dbUser as any;

        return null;

      },
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = {};
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    }
  },
} satisfies NextAuthOptions

// Use it in server contexts
export function useAuthentification(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config)
}