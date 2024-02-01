import { connect } from "mongoose";

interface MongoOptions {
  mongoUrl: string;
  dbName: string;
}

export class mongoDatabase {
  static async connect(options: MongoOptions) {
    const { dbName, mongoUrl } = options;

    try {
      await connect(mongoUrl, { dbName });
      console.log(`Mongo connected to ${dbName} database ✅`);
    } catch (error) {
      throw new Error(`Error connecting to MongoDB database: ${error}`);
    }
  }
}
