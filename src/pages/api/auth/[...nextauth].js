import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "../../../../lib/db";
import { verifyPassword } from "../../../../lib/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const dbName = process.env.DB_NAME;
        const userCollectionName = process.env.USER_COLLECTION_NAME;

        const client = await connectToDatabase();
        const userCollection = client.db(dbName).collection(userCollectionName);

        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log you in");
        }

        client.close();

        return { email: user.email };
      },
    }),
  ],
});
