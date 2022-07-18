import { inject, injectable } from "inversify";
import { ObjectId } from "mongodb";
import { RuleModel } from "../dto/interfaces/rule.interface";
import { IRuleRepository } from "../repositories/rule.repository";
import { TYPES } from "../types.js";

export interface IRuleService {
  createRule(data: RuleModel): Promise<any>;
  getRuleById(id: string): Promise<any>;
}

@injectable()
export default class RuleService implements IRuleService {
  @inject(TYPES.RuleRepository) private ruleRepository:
    | IRuleRepository
    | undefined;
  constructor() {}

  async createRule(data: RuleModel): Promise<any> {
    const _data = await this.ruleRepository?.createRule(data);
    return _data;
  }
  async getRuleById(id: string): Promise<any> {
    const _data = await this.ruleRepository?.getRuleById(id);
    return _data;
  }
}
