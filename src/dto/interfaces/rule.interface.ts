import { Document } from "mongoose";

export interface RuleModel {
  ruleName: string;
  ruleTypeId: string;
  ruleTypeName: string;
  ruleProcessId: string;
  ruleProcessName: string;
  ruleCategoryId: string;
  ruleCategoryName: string;
  ruleSectionId: string;
  ruleSectionName: string;
  severityScoreId: string;
  severityScoreName: string;
  materialId: string;
  materialName: string;
  altId: number;
  rulePoints: number;
  ruleDate: Date;
  hardStopId: string;
  hardStopName: string;
  loeDate: Date;
  ruleDescription: string;
  rejection: string;
  display: Display[];
}

export interface Display extends Document {
  id: string;
  name: string;
}
