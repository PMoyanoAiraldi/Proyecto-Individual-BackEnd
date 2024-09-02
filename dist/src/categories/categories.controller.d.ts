import { CategoriesService } from "./categories.service";
import { Category } from "./categories.entity";
import { CreateCategoryDto } from "./dto/category.dto";
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    createCategory(createCategoryDto: CreateCategoryDto): Promise<Category>;
    getCategory(id: string): Promise<Category>;
}
