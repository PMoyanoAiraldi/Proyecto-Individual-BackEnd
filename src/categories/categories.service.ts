import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "./categories.repository";
import { Category } from "./categories.entity";
import { CreateCategoryDto } from "./dto/category.dto";

@Injectable()
export class CategoriesService {
    constructor(
        
        private readonly categoryRepository: CategoriesRepository){}

    async seedCategories(categories: { name: string; }[]) : Promise<Category[]> {
        return this.categoryRepository.addCategories(categories)
    }

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
        return this.categoryRepository.createCategory(createCategoryDto);
    }
    
    async getCategories(): Promise<Category[]>{
        return this.categoryRepository.getCategories();
    }

    async findOneById(id: string): Promise<Category | undefined> {
        return this.categoryRepository.findOneById(id);
    }
    
}