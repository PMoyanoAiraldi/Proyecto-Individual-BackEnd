import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./products.repository";
import { CreateProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { CategoriesRepository } from "../categories/categories.repository";
import { Product } from "./products.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class ProductsService{
    
    constructor (
        @InjectRepository(ProductRepository)
        private productsRepository: ProductRepository,

        @InjectRepository(CategoriesRepository)
        private categoriesRepository: CategoriesRepository
    ){}

    async getProducts(): Promise<Product[]>{
        return this.productsRepository.getProducts()
    }

    async getProduct(id: string): Promise<Product>{
        return await this.productsRepository.getProductById(id)
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product>{
        const category = await this.categoriesRepository.findOneBy({id: createProductDto.categoryId})
        if(!category){
            throw Error ('La categoria no fue encontrada')
        }
        return this.productsRepository.createProduct(createProductDto, category)
    }

    async seedProducts(products: Product[]) {
        const categories = await this.categoriesRepository.getCategories();
        const newProducts = [];

        for (const productData of products) {
            const category = categories.find(cat => cat.name === productData.category.name);
            if (!category) {
                throw new Error(`Category '${productData.category.name}' not found`);
            }

            const exists = await this.productsRepository.getProductByName(productData.name);
            if (!exists) {
                const product = new Product();
                product.name = productData.name;
                product.description = productData.description;
                product.price = productData.price;
                product.stock = productData.stock;
                product.imgUrl = productData.imgUrl || 'default-image-url.png';
                product.category = category;
                newProducts.push(product);
            }
        }
    
        await this.productsRepository.addProducts(newProducts);
    }
    
    async findAll(page: number, limit: number){
        return await this.productsRepository.find({
            take: limit,
            skip: (page - 1) * limit
        });
    }

    async updateProduct(id: string, updateProductDto: updateProductDto): Promise<Product>{
        return this.productsRepository.updateProduct(id, updateProductDto)
    }

    async removeProduct(id: string): Promise<{id: string}>{
        return this.productsRepository.removeProduct(id)
    }

    async buyProduct(id: string) {
        const product =  await this.productsRepository.getProductById(id);
        if(product.stock === 0){
            throw new Error ("Stock agotado")
        }
        await this.productsRepository.update(id, {
            stock: product.stock - 1,
        });
        console.log("Producto comprado exitosamente")
        return product.price;
    }
}