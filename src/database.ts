import { injectable } from "inversify";
import { Collection, Db, MongoClient } from "mongodb";
import mongoose from "mongoose";

@injectable()
class Database {
  private password: string;

  private user: string;

  private host: string;

  private dbName: string;

  private dbClient: MongoClient | undefined;

  private databaseInstance: Db | undefined;
  private connection: { connection: boolean } = {
    connection: false,
  };

  constructor() {
    this.password = process.env.DB_PWD || "";
    this.user = process.env.DB_USER || "";
    this.host = process.env.DB_HOST || "localhost:27017";
    this.dbName = process.env.DB_NAME || "RuleAdmin";
    console.log("Db instance", this.dbName);
  }

  public async connect(): Promise<string | undefined | null> {
    if (this.connection.connection) {
      return "Connection Exists";
    }

    const TWO_MINUTES_IN_MS = 2 * 60 * 1000;
    const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

    const connectionString = this.getConnectionString();

    const client = mongoose.connect(connectionString, {
      connectTimeoutMS: TWO_MINUTES_IN_MS,
      socketTimeoutMS: ONE_DAY_IN_MS,
    });
    // this.dbClient = client;
    return await client.then((val) => {
      //this.databaseInstance = this.dbClient!.db(this.dbName);
      this.connection.connection = true;
      return "Connected to database";
    });
  }

  public async disconnect() {
    if (this.connection?.connection) {
      await this.dbClient!.close();
    }
  }

  /**
   * For MongoDB there is no table. It is called collection
   * If you are using SQL database then this should be something like getTable()
   *
   * @param name MongoDB Collection name
   */
  public getCollection(name: string): Collection {
    if (!this.databaseInstance) {
      throw new Error("Database not initialized");
    }

    return this.databaseInstance.collection(name);
  }

  /**
   * Build database connection string.
   * Customize as needed for your database.
   */
  private getConnectionString() {
    const env = process.env.NODE_ENV;
    console.log("env", this.user, this.password);
    if (env === "test" && !process.env.DB_NAME) {
      this.dbName += "_test";
    }

    if (env !== "localhost" && this.user && this.password) {
      return `mongodb+srv://${this.user}:${this.password}@${this.host}/${this.dbName}`;
    }

    return `mongodb+srv://${this.user}:${this.password}@${this.host}/${this.dbName}
    ?keepAlive=true&poolSize=30&retryWrites=true&w=majority`;
  }

  public getDbHost() {
    return this.host;
  }

  public getDbPassword() {
    return this.password;
  }

  public getDbUser() {
    return this.user;
  }

  public getDbName() {
    return this.dbName;
  }

  public isDbConnected() {
    return this.dbClient && this.connection.connection;
  }
}

export default Database;
