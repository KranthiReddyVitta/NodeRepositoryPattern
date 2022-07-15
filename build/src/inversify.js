import { Container } from "inversify";
import ReferenceDataController from "./controllers/referenceData.controller.js";
import Database from "./database.js";
import ReferenceDataRepository from "./repositories/referenceData.repository.js";
import ReferenceDataService from "./services/referenceData.service.js";
import { TYPES } from "./types.js";
const container = new Container({ defaultScope: "Singleton" });
container.bind(ReferenceDataController).to(ReferenceDataController);
container
    .bind(TYPES.ReferenceDataService)
    .to(ReferenceDataService);
container
    .bind(TYPES.ReferenceDataRepository)
    .to(ReferenceDataRepository);
container.bind(TYPES.Database).to(Database);
export default container;
