import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./products.repository";
import { createProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { CategoriesRepository } from "../categories/categories.repository";
import { Product } from "./products.entity";

@Injectable()
export class ProductsService{
    
    constructor (private productsRepository: ProductsRepository,
        private categoriesRepository: CategoriesRepository
    ){}

    async getProducts(){
        return this.productsRepository.getProducts()
    }

    async getProduct(id: string): Promise<Product>{
        return this.productsRepository.getProductById(id)
    }

    async createProduct(createProductDto: createProductDto){
        return this.productsRepository.createProduct(createProductDto)
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
    

    async updateProduct(id: number, updateProductDto: updateProductDto): Promise<Product>{
        return this.productsRepository.updateProduct(id, updateProductDto)
    }

    async removeProduct(id: number): Promise<void>{
        return this.productsRepository.removeProduct(id)
    }
}