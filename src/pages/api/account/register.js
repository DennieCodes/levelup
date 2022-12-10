// NOTE: Typescript code below was stripped to attach database first
// import { NextApiRequest, NextApiResponse } from 'next';
//
// const handler = (req: NextApiRequest, res: NextApiResponse) => {
import { hashPassword } from "/lib/auth";
import connectToDatabase from "/lib/db";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Need add backend validation or utilize Middleware via Next 13

    const dbName = process.env.DB_NAME;
    const tableName = process.env.USER_COLLECTION_NAME;

    try {
      const client = await connectToDatabase();

      const db = client.db(dbName);
      const collection = db.collection(tableName);

      // Check if the user exists already in the database

      const { email, name, password } = req.body;
      const hashedPassword = await hashPassword(password);

      await collection.insertOne({
        email: email,
        name: name,
        password: hashedPassword,
      });

      client.close();
    } catch (error) {
      console.log("There was an error.");
      console.error({ message: error.message });
    }

    res.status(201).json({ message: "User Registered" });
  }
};

export default handler;
