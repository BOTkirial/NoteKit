import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';

import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"
import DataSourceManager from "src/DataSourceManager";
import User from "@entity/User";


export const config = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Jane Doe" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        // If no credentials are provided, the authentification fails
        if (!credentials)
          return null;

        const dataSource = await DataSourceManager.getQueryRunner();

        // Query to the database to check if the username is valid
        const dbUser = await dataSource.manager.findOneBy(User, { name: credentials.username });

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
  pages: {
    signIn: "/signin"
  },
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
    },
    async session({session, token}) {
      session.user = {};
      (session.user as any)["name"] = token.name;
      (session.user as any)["id"] = token.id;
      (session.user as any)["email"] = token.email;
      console.log(session);
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: false,
        secure: false,
        sameSite: "Strict",
        path: "/",
        maxAge: 60 * 60 * 24
      }
    }
  }
} satisfies NextAuthOptions

// Use it in server contexts
export function getSession(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config)
}