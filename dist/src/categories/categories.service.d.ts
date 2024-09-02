import { CategoriesRepository } from "./categories.repository";
import { Category } from "./categories.entity";
import { CreateCategoryDto } from "./dto/category.dto";
export declare class CategoriesService {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoriesRepository);
    seedCategories(categories: {
        name: string;
    }[]): Promise<Category[]>;
    createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>;
    getCategories(): Promise<Category[]>;
    findOneById(id: string): Promise<Category | undefined>;
}
