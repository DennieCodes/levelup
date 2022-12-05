import { MongoClient } from "mongodb";

const connectToDatabase = async () => {
  const mongoURI = process.env.MONGODB_URI;
  const client = await MongoClient.connect(mongoURI);

  return client;
};

export default connectToDatabase;
