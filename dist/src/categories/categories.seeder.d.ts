import { CategoriesRepository } from './categories.repository';
export declare class CategorySeeder {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoriesRepository);
    onModuleInit(): Promise<void>;
    seedCategory(categories?: {
        name: string;
    }[]): Promise<void>;
}
