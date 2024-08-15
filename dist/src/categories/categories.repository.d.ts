import { Repository } from "typeorm";
import { Category } from "./categories.entity";
export declare class CategoriesRepository extends Repository<Category> {
    addCategories(categories: {
        name: string;
    }[]): Promise<Category[]>;
    getCategories(): Promise<Category[]>;
    findOneById(id: string): Promise<Category | undefined>;
}
