import { inject, injectable } from "inversify";
import { Model } from "mongoose";
import { Reference } from "../dto/interfaces/referenceData";
import { IReferenceDataRepository } from "../repositories/referenceData.repository";
import { TYPES } from "../types.js";

export interface IReferenceDataService {
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
export default class ReferenceDataService implements IReferenceDataService {
  @inject(TYPES.ReferenceDataRepository)
  private userRepository: IReferenceDataRepository | undefined;

  async getRuleTypes(): Promise<any> {
    const _data = await this.userRepository?.getRuleTypes();
    return _data;
  }
  async getRuleCategories(): Promise<any> {
    const _data = await this.userRepository?.getRuleCategories();
    return _data;
  }
  async getRuleProcessPoints(): Promise<any> {
    const _data = await this.userRepository?.getRuleProcessPoints();
    return _data;
  }
  async getRuleReportSection(): Promise<any> {
    const _data = await this.userRepository?.getRuleReportSection();
    return _data;
  }
  async getRuleSeverityScore(): Promise<any> {
    const _data = await this.userRepository?.getRuleSeverityScore();
    return _data;
  }
  async getRuleHardStop(): Promise<any> {
    const _data = await this.userRepository?.getRuleHardStop();
    return _data;
  }

  async getRuleMaterial(): Promise<any> {
    const _data = await this.userRepository?.getRuleMaterial();
    return _data;
  }
  async getRuleDisplay(): Promise<any> {
    const _data = await this.userRepository?.getRuleDisplay();
    return _data;
  }

  async createRuleTypes(data: Reference[]): Promise<any> {
    const _data = await this.userRepository?.createRuleTypes(data);
    return _data;
  }

  async createRuleCategories(data: Reference[]): Promise<any> {
    const _data = await this.userRepository?.createRuleCategories(data);
    return _data;
  }
  async createRuleProcessPoints(data: Reference[]): Promise<any> {
    const _data = await this.userRepository?.createRuleProcessPoints(data);
    return _data;
  }
  async createRuleReportSection(data: Reference[]): Promise<any> {
    const _data = await this.userRepository?.createRuleReportSection(data);
    return _data;
  }
  async createRuleSeverityScore(data: Reference[]): Promise<any> {
    const _data = await this.userRepository?.createRuleSeverityScore(data);
    return _data;
  }
  async createRuleHardStop(data: Reference[]): Promise<any> {
    const _data = await this.userRepository?.createRuleHardStop(data);
    return _data;
  }
  async createRuleMaterial(data: Reference[]): Promise<any> {
    const _data = await this.userRepository?.createRuleMaterial(data);
    return _data;
  }

  async createRuleDisplay(data: Reference[]): Promise<any> {
    const _data = await this.userRepository?.createRuleDisplay(data);
    return _data;
  }
}
