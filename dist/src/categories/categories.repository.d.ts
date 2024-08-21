import { EntityManager } from "typeorm";
import { Category } from "./categories.entity";
export declare class CategoriesRepository {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    addCategories(categories: {
        name: string;
    }[]): Promise<Category[]>;
    getCategories(): Promise<Category[]>;
    findOneById(id: string): Promise<Category | undefined>;
}
