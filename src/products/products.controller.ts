import { Controller, Get, Post, Delete, Put,HttpCode, HttpStatus, UseGuards, Param, Body} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { AuthGuard } from "ecommerce-PMoyanoAiraldi/guard/auth/auth.guard";
import { createProductDto } from "./dto/create-product.dto";
import { responseProductDto } from "./dto/response-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { Product } from "./products.entity";


@Controller('products') 
export class ProductsController{
    constructor(private readonly productsService: ProductsService) {} 

    @Get() 
    getProducts(){ //define el comportamiento
        return this.productsService.getProducts();
    }

    @Post('seeder')
    async seedProducts(@Body() products: Product[]){
        return this.productsService.seedProducts(products)
    }

    @Post()
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.CREATED)
    createProducts(@Body() CreateProductDto: createProductDto){
        return this.productsService.createProduct(CreateProductDto)
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getProduct(@Param('id') id: string) : Promise<responseProductDto>{
        const product = await this.productsService.getProduct((id))
        return product
    }

    @Put('id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    updateProducts(@Param('id') id: string, @Body() updateProduct: updateProductDto){
        return this.productsService.updateProduct(+id, updateProduct)
    }

    @Delete('id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    deleteProducts(@Param('id') id: string){
        return this.productsService.removeProduct(+id)
    }

}