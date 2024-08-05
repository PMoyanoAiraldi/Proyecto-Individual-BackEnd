import { CategoriesService } from "./categories.service";
import { CategorySeeder } from "./categories.seeder";
export declare class CategoriesController {
    private readonly categoriesService;
    private readonly categoriesSeeder;
    constructor(categoriesService: CategoriesService, categoriesSeeder: CategorySeeder);
    seedCategories(categories: {
        name: string;
    }[]): Promise<{
        message: string;
        error?: undefined;
    } | {
        message: string;
        error: any;
    }>;
}
