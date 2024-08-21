import { Injectable, OnModuleInit } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from './categories.repository';
import { categoriesData } from './categories.data';
import { Category } from './categories.entity';

@Injectable()
export class CategorySeeder {
    constructor( private readonly categoryRepository: CategoriesRepository) {}

    async onModuleInit() {
        await this.seedCategory();
    }


        async seedCategory(categories: { name: string }[]= categoriesData){
            const existingCategories = await this.categoryRepository.getCategories();
            const newCategories = categoriesData.filter(category => 
                !existingCategories.some(existingCategories => existingCategories.name === category.name))
                .map(category => {
                    const newCategory = new Category();
                    newCategory.name = category.name;
                    return newCategory;                
                });
                if (newCategories.length > 0) {
                    await this.categoryRepository.addCategories(newCategories);
                }
        }
}
