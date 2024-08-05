import { Repository } from "typeorm";
import { Category } from "./categories.entity";
export declare class CategoriesRepository {
    private readonly categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    addCategories(categories: {
        name: string;
    }[]): Promise<Category[]>;
    getCategories(): Promise<Category[]>;
}
