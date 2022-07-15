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
import { RuleCategory, RuleDispalySchema, RuleHardStopSchema, RuleMaterialSchema, RuleProcessPoint, RuleReportSchema, RuleSeveritySchema, RuleType, } from "../dto/models/referenceSchema.js";
import Repository from "./repository.js";
let ReferenceDataRepository = class ReferenceDataRepository extends Repository {
    constructor() {
        super("RuleType");
    }
    createRuleTypes(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleType;
            const _data = (yield this.createMany(data));
            return _data;
        });
    }
    createRuleCategories(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleCategory;
            const _data = (yield this.createMany(data));
            return _data;
        });
    }
    createRuleProcessPoints(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleProcessPoint;
            const _data = (yield this.createMany(data));
            return _data;
        });
    }
    createRuleReportSection(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleReportSchema;
            const _data = (yield this.createMany(data));
            return _data;
        });
    }
    createRuleSeverityScore(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleSeveritySchema;
            const _data = (yield this.createMany(data));
            return _data;
        });
    }
    createRuleHardStop(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleHardStopSchema;
            const _data = (yield this.createMany(data));
            return _data;
        });
    }
    createRuleMaterial(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleMaterialSchema;
            const _data = (yield this.createMany(data));
            return _data;
        });
    }
    createRuleDisplay(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleDispalySchema;
            const _data = (yield this.createMany(data));
            return _data;
        });
    }
    getRuleTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleType;
            const _data = (yield this.find({}));
            return _data;
        });
    }
    getRuleCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleCategory;
            const _data = (yield this.find({}));
            return _data;
        });
    }
    getRuleProcessPoints() {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleProcessPoint;
            const _data = (yield this.find({}));
            return _data;
        });
    }
    getRuleReportSection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleReportSchema;
            const _data = (yield this.find({}));
            return _data;
        });
    }
    getRuleSeverityScore() {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleSeveritySchema;
            const _data = (yield this.find({}));
            return _data;
        });
    }
    getRuleHardStop() {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleHardStopSchema;
            const _data = (yield this.find({}));
            return _data;
        });
    }
    getRuleMaterial() {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleMaterialSchema;
            const _data = (yield this.find({}));
            return _data;
        });
    }
    getRuleDisplay() {
        return __awaiter(this, void 0, void 0, function* () {
            this.collection = RuleDispalySchema;
            const _data = (yield this.find({}));
            return _data;
        });
    }
};
ReferenceDataRepository = __decorate([
    injectable()
], ReferenceDataRepository);
export default ReferenceDataRepository;
