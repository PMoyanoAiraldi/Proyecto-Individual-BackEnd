import { Body, Controller, Post } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategorySeeder } from "./categories.seeder";

@Controller('categories')
export class CategoriesController{
    constructor(private readonly categoriesService: CategoriesService,
        private readonly categoriesSeeder: CategorySeeder
    ){}

    @Post('seeder')
    async seedCategories(@Body() categories: { name: string}[]){
        try {
            await this.categoriesSeeder.seedCategory(categories);
            return { message: 'Categories seeded successfully' };
        } catch (error) {
            return { message: 'Error seeding categories', error };
        }
    }

}