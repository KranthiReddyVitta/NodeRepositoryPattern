import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { Reference } from "../dto/interfaces/referenceData";
import { RuleType } from "../dto/models/referenceSchema.js";
import { IReferenceDataService } from "../services/referenceData.service";
import { TYPES } from "../types.js";

@injectable()
export default class ReferenceDataController {
  @inject(TYPES.ReferenceDataService)
  private referenceService: IReferenceDataService | undefined;
  _modelName: string | number | undefined;

  constructor() {}

  public async createRuleTypes(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const body: Reference[] = req.body;
    const data = await this.referenceService?.createRuleTypes(body);
    res.send(data);
  }

  public async createRuleCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body: Reference[] = req.body;
    const data = await this.referenceService?.createRuleCategories(body);
    res.send(data);
  }

  public async createRuleProcessPoint(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body: Reference[] = req.body;
    const data = await this.referenceService?.createRuleProcessPoints(body);
    res.send(data);
  }

  public async createRuleReportSection(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body: Reference[] = req.body;
    const data = await this.referenceService?.createRuleReportSection(body);
    res.send(data);
  }

  public async createRuleMaterial(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body: Reference[] = req.body;
    const data = await this.referenceService?.createRuleMaterial(body);
    res.send(data);
  }

  public async createRuleDisplay(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body: Reference[] = req.body;
    const data = await this.referenceService?.createRuleDisplay(body);
    res.send(data);
  }

  public async createRuleSeverity(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body: Reference[] = req.body;
    const data = await this.referenceService?.createRuleSeverityScore(body);
    res.send(data);
  }

  public async createRuleHardStop(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const body: Reference[] = req.body;
    const data = await this.referenceService?.createRuleHardStop(body);
    res.send(data);
  }

  public async getRuleTypes(req: Request, res: Response, next: NextFunction) {
    const data = await this.referenceService?.getRuleTypes();
    res.send(data);
  }

  public async getRuleCategory(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await this.referenceService?.getRuleCategories();
    res.send({
      _data: data,
    });
  }

  public async getRuleProcessPoint(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await this.referenceService?.getRuleProcessPoints();
    res.send(data);
  }

  public async getRuleReportSection(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await this.referenceService?.getRuleReportSection();
    res.send(data);
  }

  public async getRuleMaterial(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await this.referenceService?.getRuleMaterial();
    res.send(data);
  }

  public async getRuleDisplay(req: Request, res: Response, next: NextFunction) {
    const data = await this.referenceService?.getRuleDisplay();
    res.send(data);
  }

  public async getRuleSeverity(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await this.referenceService?.getRuleSeverityScore();
    res.send(data);
  }

  public async getRuleHardStop(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = await this.referenceService?.getRuleHardStop();
    res.send(data);
  }

  getModelSchema(_schema: string | number | undefined) {
    return { method: this.referenceService!.createRuleTypes, schema: RuleType };
  }
}
