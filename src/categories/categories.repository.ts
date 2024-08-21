import { EntityManager } from "typeorm";
import { Category } from "./categories.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CategoriesRepository {
    constructor (private readonly entityManager: EntityManager) {}
    
    async addCategories(categories: { name: string }[]): Promise<Category[]> {
        const existingCategories = await this.getCategories();
        const existingCategoryNames = new Set(existingCategories.map(cat => cat.name)); //verifica los nombres existentes con Set

        // Convertimos los datos en instancias de Category y filtramos los duplicados
        const newCategories = categories
        .filter(category => !existingCategoryNames.has(category.name))
        .map(category => {
            const newCategory = new Category();
            newCategory.name = category.name;
            return newCategory;
        });

        return this.entityManager.save(Category, newCategories);
    }

    async getCategories(): Promise<Category[]> {
        //console.log('CategoriesRepository:', this);
        return this.entityManager.find(Category)
    }

    async findOneById(id: string): Promise<Category | undefined>{
        console.log('CategoriesRepository findOneById:', this)
        return this.entityManager.findOne(Category,{where: {id}})
    }
}