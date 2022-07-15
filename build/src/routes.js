import ReferenceDataController from "./controllers/referenceData.controller.js";
import container from "./inversify.js";
import asyncWrap from "./utils/asyncWrapper.js";
export default function (app) {
    const ReferenceDataControllerInstance = container.get(ReferenceDataController);
    app.post("/referenceData/ruleType", asyncWrap(ReferenceDataControllerInstance.createRuleTypes.bind(ReferenceDataControllerInstance)));
    app.post("/referenceData/ruleCategory", asyncWrap(ReferenceDataControllerInstance.createRuleCategory.bind(ReferenceDataControllerInstance)));
    app.post("/referenceData/ruleProcessPoint", asyncWrap(ReferenceDataControllerInstance.createRuleProcessPoint.bind(ReferenceDataControllerInstance)));
    app.post("/referenceData/ruleReportSection", asyncWrap(ReferenceDataControllerInstance.createRuleReportSection.bind(ReferenceDataControllerInstance)));
    app.post("/referenceData/ruleMaterial", asyncWrap(ReferenceDataControllerInstance.createRuleMaterial.bind(ReferenceDataControllerInstance)));
    app.post("/referenceData/ruleDisplay", asyncWrap(ReferenceDataControllerInstance.createRuleDisplay.bind(ReferenceDataControllerInstance)));
    app.post("/referenceData/ruleSeverity", asyncWrap(ReferenceDataControllerInstance.createRuleSeverity.bind(ReferenceDataControllerInstance)));
    app.post("/referenceData/ruleHardStop", asyncWrap(ReferenceDataControllerInstance.createRuleHardStop.bind(ReferenceDataControllerInstance)));
    app.get("/referenceData/ruleType", asyncWrap(ReferenceDataControllerInstance.getRuleTypes.bind(ReferenceDataControllerInstance)));
    app.get("/referenceData/ruleCategory", asyncWrap(ReferenceDataControllerInstance.getRuleCategory.bind(ReferenceDataControllerInstance)));
    app.get("/referenceData/ruleProcessPoint", asyncWrap(ReferenceDataControllerInstance.getRuleProcessPoint.bind(ReferenceDataControllerInstance)));
    app.get("/referenceData/ruleReportSection", asyncWrap(ReferenceDataControllerInstance.getRuleReportSection.bind(ReferenceDataControllerInstance)));
    app.get("/referenceData/ruleMaterial", asyncWrap(ReferenceDataControllerInstance.getRuleMaterial.bind(ReferenceDataControllerInstance)));
    app.get("/referenceData/ruleDisplay", asyncWrap(ReferenceDataControllerInstance.getRuleDisplay.bind(ReferenceDataControllerInstance)));
    app.get("/referenceData/ruleSeverity", asyncWrap(ReferenceDataControllerInstance.getRuleSeverity.bind(ReferenceDataControllerInstance)));
    app.get("/referenceData/ruleHardStop", asyncWrap(ReferenceDataControllerInstance.getRuleHardStop.bind(ReferenceDataControllerInstance)));
}
