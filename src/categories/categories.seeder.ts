import { Injectable, OnModuleInit } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriesRepository } from './categories.repository';
import { categoriesData } from './categories.data';
import { Category } from './categories.entity';

@Injectable()
export class CategorySeeder {
    constructor( private readonly categoryRepository: CategoriesRepository) {}

        async seedCategory(categories: {name: string}[]){
            const existingCategories = await this.categoryRepository.getCategories();
            const newCategories = categoriesData.filter(category => 
                !existingCategories.some(existingCategories => existingCategories.name === category.name))
                .map(category => {
                    const newCategory = new Category();
                    newCategory.name = category.name;
                    return newCategory;                
                });
                await  this.categoryRepository.addCategories(newCategories)
        }
}
