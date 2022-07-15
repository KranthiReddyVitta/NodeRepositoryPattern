import { injectable } from "inversify";
import { Reference } from "../dto/interfaces/referenceData";
import {
  RuleCategory,
  RuleDispalySchema,
  RuleHardStopSchema,
  RuleMaterialSchema,
  RuleProcessPoint,
  RuleReportSchema,
  RuleSeveritySchema,
  RuleType,
} from "../dto/models/referenceSchema.js";
import Repository, { IRepository } from "./repository.js";

export interface IReferenceDataRepository extends IRepository<any> {
  createRuleTypes(data: Reference[]): Promise<any>;
  createRuleCategories(data: Reference[]): Promise<any>;
  createRuleProcessPoints(data: Reference[]): Promise<any>;
  createRuleReportSection(data: Reference[]): Promise<any>;
  createRuleSeverityScore(data: Reference[]): Promise<any>;
  createRuleHardStop(data: Reference[]): Promise<any>;
  createRuleMaterial(data: Reference[]): Promise<any>;
  createRuleDisplay(data: Reference[]): Promise<any>;
  getRuleTypes(): Promise<any>;
  getRuleCategories(): Promise<any>;
  getRuleProcessPoints(): Promise<any>;
  getRuleReportSection(): Promise<any>;
  getRuleSeverityScore(): Promise<any>;
  getRuleHardStop(): Promise<any>;
  getRuleMaterial(): Promise<any>;
  getRuleDisplay(): Promise<any>;
}

@injectable()
export default class ReferenceDataRepository
  extends Repository<any>
  implements IReferenceDataRepository
{
  constructor() {
    super("RuleType");
  }

  async createRuleTypes(data: Reference[]): Promise<any> {
    this.collection = RuleType;
    const _data = (await this.createMany(data)) as any;
    return _data;
  }
  async createRuleCategories(data: Reference[]): Promise<any> {
    this.collection = RuleCategory;
    const _data = (await this.createMany(data)) as any;
    return _data;
  }
  async createRuleProcessPoints(data: Reference[]): Promise<any> {
    this.collection = RuleProcessPoint;
    const _data = (await this.createMany(data)) as any;
    return _data;
  }
  async createRuleReportSection(data: Reference[]): Promise<any> {
    this.collection = RuleReportSchema;
    const _data = (await this.createMany(data)) as any;
    return _data;
  }
  async createRuleSeverityScore(data: Reference[]): Promise<any> {
    this.collection = RuleSeveritySchema;
    const _data = (await this.createMany(data)) as any;
    return _data;
  }

  async createRuleHardStop(data: Reference[]): Promise<any> {
    this.collection = RuleHardStopSchema;
    const _data = (await this.createMany(data)) as any;
    return _data;
  }

  async createRuleMaterial(data: Reference[]): Promise<any> {
    this.collection = RuleMaterialSchema;
    const _data = (await this.createMany(data)) as any;
    return _data;
  }

  async createRuleDisplay(data: Reference[]): Promise<any> {
    this.collection = RuleDispalySchema;
    const _data = (await this.createMany(data)) as any;
    return _data;
  }
  async getRuleTypes(): Promise<any> {
    this.collection = RuleType;
    const _data = (await this.find({})) as any;
    return _data;
  }
  async getRuleCategories(): Promise<any> {
    this.collection = RuleCategory;
    const _data = (await this.find({})) as any;
    return _data;
  }
  async getRuleProcessPoints(): Promise<any> {
    this.collection = RuleProcessPoint;
    const _data = (await this.find({})) as any;
    return _data;
  }
  async getRuleReportSection(): Promise<any> {
    this.collection = RuleReportSchema;
    const _data = (await this.find({})) as any;
    return _data;
  }
  async getRuleSeverityScore(): Promise<any> {
    this.collection = RuleSeveritySchema;
    const _data = (await this.find({})) as any;
    return _data;
  }
  async getRuleHardStop(): Promise<any> {
    this.collection = RuleHardStopSchema;
    const _data = (await this.find({})) as any;
    return _data;
  }

  async getRuleMaterial(): Promise<any> {
    this.collection = RuleMaterialSchema;
    const _data = (await this.find({})) as any;
    return _data;
  }

  async getRuleDisplay(): Promise<any> {
    this.collection = RuleDispalySchema;
    const _data = (await this.find({})) as any;
    return _data;
  }
}
