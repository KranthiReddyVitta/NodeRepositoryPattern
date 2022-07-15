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
import { inject, injectable } from "inversify";
import { RuleType } from "../dto/models/referenceSchema.js";
import { TYPES } from "../types.js";
let ReferenceDataController = class ReferenceDataController {
    constructor() { }
    createRuleTypes(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.createRuleTypes(body));
            res.send(data);
        });
    }
    createRuleCategory(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.createRuleCategories(body));
            res.send(data);
        });
    }
    createRuleProcessPoint(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.createRuleProcessPoints(body));
            res.send(data);
        });
    }
    createRuleReportSection(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.createRuleReportSection(body));
            res.send(data);
        });
    }
    createRuleMaterial(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.createRuleMaterial(body));
            res.send(data);
        });
    }
    createRuleDisplay(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.createRuleDisplay(body));
            res.send(data);
        });
    }
    createRuleSeverity(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.createRuleSeverityScore(body));
            res.send(data);
        });
    }
    createRuleHardStop(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.createRuleHardStop(body));
            res.send(data);
        });
    }
    getRuleTypes(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.getRuleTypes());
            res.send(data);
        });
    }
    getRuleCategory(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.getRuleCategories());
            res.send({
                _data: data,
            });
        });
    }
    getRuleProcessPoint(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.getRuleProcessPoints());
            res.send(data);
        });
    }
    getRuleReportSection(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.getRuleReportSection());
            res.send(data);
        });
    }
    getRuleMaterial(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.getRuleMaterial());
            res.send(data);
        });
    }
    getRuleDisplay(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.getRuleDisplay());
            res.send(data);
        });
    }
    getRuleSeverity(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.getRuleSeverityScore());
            res.send(data);
        });
    }
    getRuleHardStop(req, res, next) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield ((_a = this.referenceService) === null || _a === void 0 ? void 0 : _a.getRuleHardStop());
            res.send(data);
        });
    }
    getModelSchema(_schema) {
        return { method: this.referenceService.createRuleTypes, schema: RuleType };
    }
};
__decorate([
    inject(TYPES.ReferenceDataService)
], ReferenceDataController.prototype, "referenceService", void 0);
ReferenceDataController = __decorate([
    injectable()
], ReferenceDataController);
export default ReferenceDataController;
