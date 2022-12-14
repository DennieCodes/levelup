import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
// import clientPromise from '../../../../lib/db';
import { connectToDatabase } from "../../../../lib/db";
import { verifyPassword } from "../../../../lib/auth";

const nextAuthSecret = process.env.NEXT_AUTH_SECRET;

export default NextAuth({
  // adapter: MongoDBAdapter(clientPromise, {
  // 	databaseName: process.env.DB_NAME,
  // 	colletions: process.env.USER_COLLECTION_NAME,
  // }),
  secret: nextAuthSecret,
  session: {
    jwt: true,
    maxAge: 3000,
    updateAge: 24,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!process.env.DB_NAME || !process.env.USER_COLLECTION_NAME) {
          throw new Error("Please add Database and Colletion name .env.local");
        }
        // // const dbName = process.env.DB_NAME;
        // const userCollectionName = process.env.USER_COLLECTION_NAME;

        console.log("Connecting to Database");
        const client = await connectToDatabase();
        // const db = client.db(dbName);
        const collection = client
          .db(process.env.DB_NAME)
          .collection(process.env.USER_COLLECTION_NAME);
        // // client.db(dbName).collection(userCollectionName);

        // const matchingUser = await MongoDBAdapter.getUserByEmail(
        // 	credentials.email
        // );
        const matchingUser = await collection.findOne({
          email: credentials.email,
        });

        if (!matchingUser) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          matchingUser.password
        );

        if (!isValid) {
          throw new Error("Could not log you in");
        }

        const user = {
          name: matchingUser.name,
          email: matchingUser.email,
        };

        return user;
      },
    }),
  ],
});
