import { injectable } from "inversify";
import { ObjectId } from "mongodb";
import { RuleModel } from "../dto/interfaces/rule.interface";
import RuleSchema from "../dto/models/ruleSchema.js";
import Repository from "./repository.js";

export interface IRuleRepository extends Repository<any> {
  createRule(data: RuleModel): Promise<any>;
  getRuleById(id: string): Promise<any>;
}

@injectable()
export default class RuleRepository
  extends Repository<any>
  implements IRuleRepository
{
  constructor() {
    super("");
  }
  async createRule(data: RuleModel): Promise<any> {
    this.collection = RuleSchema;
    const _data = await this.create(data);
    return _data;
  }
  async getRuleById(id: string): Promise<any> {
    this.collection = RuleSchema;
    const _data = await this.get(id);
    return _data;
  }
}
