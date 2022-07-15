var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
import { injectable, unmanaged } from "inversify";
let Repository = class Repository {
    constructor(collection) {
        // const dbInstance = container.get<Database>(Database);
        // this.collection = dbInstance.getCollection(collection);
    }
    get(id, select) {
        throw new Error("Method not implemented.");
    }
    find(filter = {}, limit = 20, page, select, sort) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = (yield this.collection.find(filter));
            return doc;
        });
    }
    create(data) {
        throw new Error("Method not implemented.");
    }
    createMany(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // const collection = this.collection;
            const doc = (yield this.collection.insertMany(data));
            return doc;
        });
    }
    update(filter, data, multi) {
        throw new Error("Method not implemented.");
    }
    updateById(ids, data) {
        throw new Error("Method not implemented.");
    }
    remove(filter, multi) {
        throw new Error("Method not implemented.");
    }
    removeById(id) {
        throw new Error("Method not implemented.");
    }
    getCollection() {
        throw new Error("Method not implemented.");
    }
};
Repository = __decorate([
    injectable(),
    __param(0, unmanaged())
], Repository);
export default Repository;
