import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./categories.entity";

@Injectable()
export class CategoriesRepository{
    constructor(
        @InjectRepository(Category)        
        private readonly categoryRepo: Repository<Category>
    ){}


    async addCategories(categories: { name: string }[]): Promise<Category[]> {
        const existingCategories = await this.getCategories();
        const newCategories = categories.filter(
            (category) => !existingCategories.some((cat) => cat.name === category.name)
        )
        return this.categoryRepo.save(newCategories);
    }

    async getCategories(): Promise<Category[]> {
        return this.categoryRepo.find()
    }
}