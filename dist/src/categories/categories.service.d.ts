import { CategoriesRepository } from "./categories.repository";
import { Category } from "./categories.entity";
export declare class CategoriesService {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoriesRepository);
    seedCategories(categories: {
        name: string;
    }[]): Promise<Category[]>;
    getCategories(): Promise<Category[]>;
}
