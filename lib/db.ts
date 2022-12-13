import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
  }

  if (!process.env.DB_NAME) {
    throw new Error("Please add Database name to .env.local");
  }
  // const mongoURI = process.env.MONGODB_URI;

  const client: MongoClient = await MongoClient.connect(
    process.env.MONGODB_URI
  );
  client.db(process.env.DB_NAME);

  return client;
}

// if (!process.env.MONGODB_URI) {
// 	throw new Error('Please add your Mongo URI to .env.local');
// }
// const mongoURI = process.env.MONGODB_URI;
// const options = {};

// let client;
// let clientPromise: Promise<MongoClient>;

// const globalWithMongo = global as typeof globalThis & {
// 	_mongoClientPromise: Promise<MongoClient>;
// };

// if (process.env.NODE_ENV === 'development') {
// 	// if (!globalWithMongo._mongoClientPromise) {
// 	client = new MongoClient(mongoURI, options);
// 	globalWithMongo._mongoClientPromise = client.connect();
// 	// }
// 	clientPromise = globalWithMongo._mongoClientPromise;
// } else {
// 	client = new MongoClient(mongoURI, options);
// 	clientPromise = client.connect();
// }

// export default clientPromise;
