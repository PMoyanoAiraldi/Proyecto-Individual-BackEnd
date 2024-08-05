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

    getProducts(){
        return this.productsRepository.getProducts()
    }

    getProduct(id: number){
        return this.productsRepository.getProductById(id)
    }

    createProduct(createProductDto: createProductDto){
        return this.productsRepository.createProduct(createProductDto)
    }

    async seedProducts(products: Product[]) {
        const categories = await this.categoriesRepository.getCategories();
        const newProducts = products.map(productData => {
            const category = categories.find(cat => cat.name === productData.category.name);
            if (!category) {
                throw new Error(`Category '${productData.category.name}' not found`);
            }
            const product = new Product();
            product.name = productData.name;
            product.description = productData.description;
            product.price = productData.price;
            product.stock = productData.stock;
            product.imgUrl = productData.imgUrl || 'default-image-url.png';
            product.category = category;
            return product;
        });
    
            await this.productsRepository.addProducts(newProducts);
        }
    

    updateProduct(id: number, updateProductDto: updateProductDto){
        return this.productsRepository.updateProduct(id, updateProductDto)
    }

    removeProduct(id: number){
        return this.productsRepository.removeProduct(id)
    }
}