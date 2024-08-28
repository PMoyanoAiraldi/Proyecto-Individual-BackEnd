import { Controller, Get, Post, Delete, Put,HttpCode, HttpStatus, UseGuards, Param, Body, Query, ParseUUIDPipe, HttpException} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { AuthGuard } from "ecommerce-PMoyanoAiraldi/guard/auth.guard";
import { CreateProductDto } from "./dto/create-product.dto";
import { responseProductDto } from "./dto/response-product.dto";
import { UpdateProductDto } from "./dto/update-products.dto";
import { Product } from "./products.entity";
import { IsUUID } from "class-validator";
import { RolesGuard } from "ecommerce-PMoyanoAiraldi/guard/roles.guard";
import { Roles } from "../decorators/roles.decorator";


@Controller('products') 
export class ProductsController{
    constructor(private readonly productsService: ProductsService) {} 

    @Post('seeder')
    @HttpCode(HttpStatus.CREATED)
    async seedProducts(@Body() products: Product[]){
        return this.productsService.seedProducts(products)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createProducts(@Body() CreateProductDto: CreateProductDto){
        return await this.productsService.createProduct(CreateProductDto)
    }

    @Get()
    @HttpCode(HttpStatus.OK) 
    async getProducts(){ //define el comportamiento
        return await this.productsService.getProducts();
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10){
        return await this.productsService.findAll(page, limit)
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getProduct(@Param('id', new ParseUUIDPipe()) id: string){
        const product = await this.productsService.getProduct((id))
        if(!IsUUID(4, { each: true})){
            throw new HttpException('UUID inválido', HttpStatus.BAD_REQUEST)
        }
        if(!product){
            throw new HttpException('El producto no fue encontrado', HttpStatus.NOT_FOUND)
        }
        return product
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard, RolesGuard)
    @Roles('admin')
    async updateProducts(@Param('id') id: string, @Body() updateProduct: UpdateProductDto): Promise<Product>{
        return await this.productsService.updateProduct(id, updateProduct)
    }

    @Delete('id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async deleteProducts(@Param('id') id: string){
        return await this.productsService.removeProduct(id)
    }

}