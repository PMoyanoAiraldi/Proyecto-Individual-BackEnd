import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { AuthGuard } from "ecommerce-PMoyanoAiraldi/guard/auth.guard";
import { IsUUID } from "class-validator";
import { ApiSecurity, ApiTags } from "@nestjs/swagger";
import { Category } from "./categories.entity";
import { CreateCategoryDto } from "./dto/category.dto";


@ApiTags('Categories')
@Controller('categories')
export class CategoriesController{
    constructor(
        private readonly categoriesService: CategoriesService,
        
    ){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.createCategory(createCategoryDto);
}


    @Get(':id')
    @UseGuards(AuthGuard)
    @ApiSecurity('bearer')
    @HttpCode(HttpStatus.OK)
    async getCategory(@Param('id', new ParseUUIDPipe()) id: string){
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