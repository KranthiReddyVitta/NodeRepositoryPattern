import { injectable, unmanaged } from "inversify";
import { Document, ObjectId } from "mongodb";
import { Collection, FilterQuery } from "mongoose";

export interface IRepository<T> {
  get(id: string, select?: any): Promise<T>;

  find(
    filter: FilterQuery<T>,
    limit: number,
    page?: number,
    select?: any,
    sort?: any
  ): Promise<T[]>;

  create(data: Partial<T>): Promise<T>;
  createMany(data: Partial<T[]>): Promise<T[]>;

  update(
    filter: FilterQuery<T>,
    data: Partial<T>,
    multi: boolean
  ): Promise<void>;
  updateById(ids: ObjectId | ObjectId[], data: Partial<T>): Promise<void>;

  remove(filter: FilterQuery<T>, multi: boolean): Promise<void>;
  removeById(id: ObjectId | ObjectId[]): Promise<void>;
  getCollection(): Collection;
}

@injectable()
export default class Repository<T> implements IRepository<T> {
  public collection: any;

  constructor(@unmanaged() collection: string) {
    // const dbInstance = container.get<Database>(Database);
    // this.collection = dbInstance.getCollection(collection);
  }

  async get(id: string, select?: any): Promise<T> {
    const doc = (await this.collection.findById(id)) as T;
    return doc;
  }
  async find(
    filter: FilterQuery<T> = {},
    limit: number = 20,
    page?: number | undefined,
    select?: any,
    sort?: any
  ): Promise<T[]> {
    const doc = (await this.collection.find(filter)) as T[];
    return doc;
  }
  async create(data: Partial<T>): Promise<T> {
    const doc = (await this.collection.create(data)) as T;
    return doc;
  }
  async createMany(data: (T | undefined)[]): Promise<T[]> {
    // const collection = this.collection;
    const doc = (await this.collection.insertMany(data)) as T[];
    return doc;
  }
  update(
    filter: FilterQuery<T>,
    data: Partial<T>,
    multi: boolean
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  updateById(ids: ObjectId | ObjectId[], data: Partial<T>): Promise<void> {
    throw new Error("Method not implemented.");
  }
  remove(filter: FilterQuery<T>, multi: boolean): Promise<void> {
    throw new Error("Method not implemented.");
  }
  removeById(id: ObjectId | ObjectId[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getCollection(): Collection<Document> {
    throw new Error("Method not implemented.");
  }
}
