// NOTE: Typescript code below was stripped to attach database first
// import { NextApiRequest, NextApiResponse } from 'next';
//
// const handler = (req: NextApiRequest, res: NextApiResponse) => {
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const mongoURI = process.env.MONGODB_URI;
    const dbName = process.env.DB_NAME;
    const tableName = process.env.USER_COLLECTION_NAME;

    const client = await MongoClient.connect(mongoURI);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection(tableName);

    const insertResult = await collection.insertOne({
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
    });

    console.log("Inserted documents =>", insertResult);
    client.close();

    res.status(201).json({ message: "User Registered" });
  }
};

export default handler;
