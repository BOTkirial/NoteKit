import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../entity/User";
import { AppDataSource } from "../../../../data-source";
import { withApiMiddleware } from "../../../../services/apiMiddleware";


const handler = withApiMiddleware(NextAuth({
  providers: [
    CredentialsProvider({
      // the name of the authentification method
      name: 'Credentials',
      // the fields presented for this authentification method
      credentials: {
        username: { label: "Nom d'utilisateur", type: "text", placeholder: "Jane Doe" },
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials, req) {

        console.log(credentials)
        console.log(req)
        // Query to the database to check if the username is valid
        AppDataSource.manager.findOneBy(User, {name: "Cédric"});
        
        // If no user is registered to this username, the authentification fails

        // Check the stored hash of the user's password against the calculated hash of the submitted password

        // If they don't match, the authentification fails

        // If they match the authentification is successfull

  
        // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user
        // }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ]
}))

// export default handler;

export { handler as GET, handler as POST }
