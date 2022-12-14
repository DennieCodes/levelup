export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      DB_NAME: string;
      USER_COLLECTION_NAME: string;
      SALT_ROUNDS: number;
    }
  }
}
