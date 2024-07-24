import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { createProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";

@Injectable()
export class ProductsService{
    constructor (private productsRepository: ProductsRepository){}

    getProducts(){
        return this.productsRepository.getProducts()
    }

    getProduct(id: number){
        return this.productsRepository.getProductById(id)
    }

    createProduct(createProductDto: createProductDto){
        return this.productsRepository.createProduct(createProductDto)
    }

    updateProduct(id: number, updateProductDto: updateProductDto){
        return this.productsRepository.updateProduct(id, updateProductDto)
    }

    removeProduct(id: number){
        return this.productsRepository.removeProduct(id)
    }
}