import { Repository } from "typeorm";
import { Category } from "./categories.entity";


export class CategoriesRepository extends Repository<Category>{
    
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

        return this.save(newCategories);
    }

    async getCategories(): Promise<Category[]> {
        return this.find()
    }

    async findOneById(id: string): Promise<Category | undefined>{
        return this.findOne({where: {id}})
    }
}