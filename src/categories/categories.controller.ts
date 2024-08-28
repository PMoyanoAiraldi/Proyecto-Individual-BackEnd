import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategorySeeder } from "./categories.seeder";
import { AuthGuard } from "ecommerce-PMoyanoAiraldi/guard/auth.guard";
import { IsUUID } from "class-validator";

@Controller('categories')
export class CategoriesController{
    constructor(
        private readonly categoriesService: CategoriesService,
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

    @Get(':id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async getUser(@Param('id', new ParseUUIDPipe()) id: string){
        const category = await this.categoriesService.findOneById(id)
        if(!IsUUID(4, { each: true})){
            throw new HttpException('UUID inválido', HttpStatus.BAD_REQUEST)
        }
        if(!category){
            throw new HttpException('La categoria no fue encontrada', HttpStatus.NOT_FOUND)
        }
        return category
    }

}