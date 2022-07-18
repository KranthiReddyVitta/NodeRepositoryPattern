import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { ObjectId } from "mongodb";
import { RuleModel } from "../dto/interfaces/rule.interface.js";
import { IRuleService } from "../services/rule.service.js";
import { TYPES } from "../types.js";

@injectable()
export default class RuleController {
  @inject(TYPES.RuleService) private ruleService: IRuleService | undefined;

  constructor() {}

  public async createRule(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const data = req.body;
    const _data = await this.ruleService?.createRule(data);
    res.send(_data);
  }

  public async getRuleById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const param = req.params.id;
    const _data = await this.ruleService?.getRuleById(param);
    res.send(_data);
  }
}
