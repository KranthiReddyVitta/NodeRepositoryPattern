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
import { TYPES } from "../types.js";
let ReferenceDataService = class ReferenceDataService {
    getRuleTypes() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.getRuleTypes());
            return _data;
        });
    }
    getRuleCategories() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.getRuleCategories());
            return _data;
        });
    }
    getRuleProcessPoints() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.getRuleProcessPoints());
            return _data;
        });
    }
    getRuleReportSection() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.getRuleReportSection());
            return _data;
        });
    }
    getRuleSeverityScore() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.getRuleSeverityScore());
            return _data;
        });
    }
    getRuleHardStop() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.getRuleHardStop());
            return _data;
        });
    }
    getRuleMaterial() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.getRuleMaterial());
            return _data;
        });
    }
    getRuleDisplay() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.getRuleDisplay());
            return _data;
        });
    }
    createRuleTypes(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.createRuleTypes(data));
            return _data;
        });
    }
    createRuleCategories(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.createRuleCategories(data));
            return _data;
        });
    }
    createRuleProcessPoints(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.createRuleProcessPoints(data));
            return _data;
        });
    }
    createRuleReportSection(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.createRuleReportSection(data));
            return _data;
        });
    }
    createRuleSeverityScore(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.createRuleSeverityScore(data));
            return _data;
        });
    }
    createRuleHardStop(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.createRuleHardStop(data));
            return _data;
        });
    }
    createRuleMaterial(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.createRuleMaterial(data));
            return _data;
        });
    }
    createRuleDisplay(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const _data = yield ((_a = this.userRepository) === null || _a === void 0 ? void 0 : _a.createRuleDisplay(data));
            return _data;
        });
    }
};
__decorate([
    inject(TYPES.ReferenceDataRepository)
], ReferenceDataService.prototype, "userRepository", void 0);
ReferenceDataService = __decorate([
    injectable()
], ReferenceDataService);
export default ReferenceDataService;
