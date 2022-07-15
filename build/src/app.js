var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import "reflect-metadata";
import { TYPES } from "../src/types.js";
import container from "./inversify.js";
import routes from "./routes.js";
import app from "./server.js";
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const dbInstance = container.get(TYPES.Database);
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        if (!dbInstance.isDbConnected()) {
            return yield dbInstance.connect();
        }
    });
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
