import { Injectable } from "@nestjs/common";
import { CategoriesRepository } from "./categories.repository";
import { Category } from "./categories.entity";

@Injectable()
export class CategoriesService {
    constructor(private readonly categoryRepository: CategoriesRepository){}

    async seedCategories(categories: { name: string; }[]) : Promise<Category[]> {
        
        return this.categoryRepository.addCategories(categories)
    }

    async getCategories(): Promise<Category[]>{
        return this.categoryRepository.getCategories();
    }
    
}