import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { connectToDatabase } from "../../../../lib/db";
import { verifyPassword } from "../../../../lib/auth";

const nextAuthSecret = process.env.NEXT_AUTH_SECRET;

export default NextAuth({
  adapter: MongoDBAdapter(connectToDatabase, {
    databaseName: process.env.DB_NAME,
    colletions: process.env.USER_COLLECTION_NAME,
  }),
  secret: nextAuthSecret,
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // if (!process.env.DB_NAME || !process.env.USER_COLLECTION_NAME) {
        // 	throw new Error('Please add Database and Colletion name .env.local');
        // }
        // // const dbName = process.env.DB_NAME;
        // const userCollectionName = process.env.USER_COLLECTION_NAME;

        // const client = await connectToDatabase();
        // // const db = client.db(dbName);
        // const collection = client.collection(userCollectionName);
        // // client.db(dbName).collection(userCollectionName);
        console.log("Running credentials");
        const matchingUser = MongoDBAdapter.getUserByEmail(credentials.email);

        console.log(matchingUser);

        // const matchingUser = await collection.findOne({
        // 	email: credentials.email,
        // });

        if (!matchingUser) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          matchingUser.password
        );

        if (!isValid) {
          // client.close();
          throw new Error("Could not log you in");
        }

        // client.close();

        const user = {
          name: matchingUser.name,
          email: matchingUser.email,
        };

        return user;
      },
    }),
  ],
});
