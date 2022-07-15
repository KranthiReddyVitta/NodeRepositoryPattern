import mongoose from "mongoose";
const ruleTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Name"],
    },
});
const RuleType = mongoose.model("RuleType", ruleTypeSchema);
const ruleCategorySchema = new mongoose.Schema(Object.assign({}, ruleTypeSchema.obj));
const RuleCategory = mongoose.model("RuleCategory ", ruleCategorySchema);
const ruleProcessSchema = new mongoose.Schema(Object.assign({}, ruleTypeSchema.obj));
const RuleProcessPoint = mongoose.model("RuleProcessPoint", ruleProcessSchema);
const ruleReportSchema = new mongoose.Schema(Object.assign({}, ruleTypeSchema.obj));
const RuleReportSchema = mongoose.model("RuleReportSection", ruleReportSchema);
const ruleMaterialSchema = new mongoose.Schema(Object.assign({}, ruleTypeSchema.obj));
const RuleMaterialSchema = mongoose.model("RuleMaterial", ruleMaterialSchema);
const ruleDisplaySchema = new mongoose.Schema(Object.assign({}, ruleTypeSchema.obj));
const RuleDispalySchema = mongoose.model("RuleDisplay", ruleDisplaySchema);
const ruleSeveritySchema = new mongoose.Schema(Object.assign({}, ruleTypeSchema.obj));
const RuleSeveritySchema = mongoose.model("RuleSeverity", ruleSeveritySchema);
const ruleHardStopSchema = new mongoose.Schema(Object.assign({}, ruleTypeSchema.obj));
const RuleHardStopSchema = mongoose.model("RuleHardStop", ruleHardStopSchema);
export { RuleType, RuleCategory, RuleProcessPoint, RuleReportSchema, RuleMaterialSchema, RuleDispalySchema, RuleSeveritySchema, RuleHardStopSchema };
