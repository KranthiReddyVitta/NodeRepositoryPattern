import mongoose from "mongoose";
const ruleSchema = new mongoose.Schema({
    ruleName: {
        type: String,
        required: [true, "A rule must have a name"],
        unique: true,
        trim: true,
        maxlength: [10, "A rule name must have less or equal then 10 characters"],
        minlength: [2, "A rule name must have more or equal then 2 characters"],
    },
    ruleTypeId: {
        type: String,
        required: [true, "A ruleId must be mongo Id"],
    },
    ruleTypeName: {
        type: String,
        required: [true, "A rulename must be a string"],
    },
    ruleProcessId: {
        type: String,
        required: [true, "A ruleProcessId must be mongo Id"],
    },
    ruleProcessName: {
        type: String,
        required: [true, "A ruleProcessName must be a string"],
    },
    ruleCategoryId: {
        type: String,
        required: [true, "A ruleCategoryId must be mongo Id"],
    },
    ruleCategoryName: {
        type: String,
        required: [true, "A ruleCategoryName must be a string"],
    },
    ruleSectionId: {
        type: String,
        required: [true, "A ruleSectionId must be mongo Id"],
    },
    ruleSectionName: {
        type: String,
        required: [true, "A ruleSectionName must be a string"],
    },
    severityScoreId: {
        type: String,
        required: [true, "A severityScoreId must be mongo Id"],
    },
    severityScoreName: {
        type: String,
        required: [true, "A severityScoreName must be a string"],
    },
    materialId: {
        type: String,
        required: [true, "A materialId must be mongo Id"],
    },
    materialName: {
        type: String,
        required: [true, "A severityScoreName must be a string"],
    },
    altId: {
        type: Number,
        required: [true, "A altid must be a number"],
    },
    rulePoints: {
        type: Number,
        required: [true, "A rulePoints must be a number"],
    },
    ruleDate: {
        type: Date,
        default: Date.now(),
    },
    hardStopId: {
        type: String,
        required: [true, "A hardStopId must be mongo Id"],
    },
    hardStopName: {
        type: String,
        required: [true, "A hardStopName must be a string"],
    },
    loeDate: {
        type: Date,
        default: Date.now(),
    },
    ruleDescription: {
        type: String,
        required: [true, "A ruleDescription must be a string"],
    },
    rejection: {
        type: String,
        required: [true, "A rejection must be a string"],
    },
    display: [
        {
            id: String,
            name: String,
        },
    ],
});
const RuleSchema = mongoose.model("ruleSchema", ruleSchema);
export default RuleSchema;
