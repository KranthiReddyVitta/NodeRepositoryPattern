var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { injectable } from "inversify";
import mongoose from "mongoose";
let Database = class Database {
    constructor() {
        this.connection = {
            connection: false,
        };
        this.password = process.env.DB_PWD || "";
        this.user = process.env.DB_USER || "";
        this.host = process.env.DB_HOST || "localhost:27017";
        this.dbName = process.env.DB_NAME || "RuleAdmin";
        console.log("Db instance", this.dbName);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield client.then((val) => {
                //this.databaseInstance = this.dbClient!.db(this.dbName);
                this.connection.connection = true;
                return "Connected to database";
            });
        });
    }
    disconnect() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if ((_a = this.connection) === null || _a === void 0 ? void 0 : _a.connection) {
                yield this.dbClient.close();
            }
        });
    }
    /**
     * For MongoDB there is no table. It is called collection
     * If you are using SQL database then this should be something like getTable()
     *
     * @param name MongoDB Collection name
     */
    getCollection(name) {
        if (!this.databaseInstance) {
            throw new Error("Database not initialized");
        }
        return this.databaseInstance.collection(name);
    }
    /**
     * Build database connection string.
     * Customize as needed for your database.
     */
    getConnectionString() {
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
    getDbHost() {
        return this.host;
    }
    getDbPassword() {
        return this.password;
    }
    getDbUser() {
        return this.user;
    }
    getDbName() {
        return this.dbName;
    }
    isDbConnected() {
        return this.dbClient && this.connection.connection;
    }
};
Database = __decorate([
    injectable()
], Database);
export default Database;
