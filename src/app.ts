import { AnyARecord } from "dns";
import express from "express";
import "reflect-metadata";
import { TYPES } from "../src/types.js";
import Database from "./database.js";
import container from "./inversify.js";
import routes from "./routes.js";
import app from "./server.js";

async function bootstrap() {
  const dbInstance: any = container.get(TYPES.Database);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  if (!dbInstance.isDbConnected()) {
    return await dbInstance.connect();
  }
}

bootstrap()
  .then((val) => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      routes(app);
      console.log(`${val} App running`);
    });
  })
  .catch((error) => {
    console.log("Unknown error. " + error.message);
  });
