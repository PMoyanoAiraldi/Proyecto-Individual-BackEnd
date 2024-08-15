import { Injectable, OnModuleInit } from '@nestjs/common';
import { ProductsService } from './products.service';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';
import { CategoriesRepository } from '../categories/categories.repository';
import { productData } from './products.data';
import { Product } from './products.entity';

@Injectable()
export class ProductSeeder {
    constructor(
        @InjectRepository(ProductRepository)
        private readonly productRepository: ProductRepository,
        @InjectRepository(CategoriesRepository)
        private readonly categoryRepository: CategoriesRepository
    ) {}

    async seedProducts(){
        const categories = await this.categoryRepository.getCategories();
        const newProducts = productData.map(productData => {
            const category = categories.find(cat => cat.name === productData.category);
            if (!category) {
            throw new Error(`Category '${productData.category}' not found`);
        }
            const product = new Product;
            product.name = productData.name;
            product.description = productData.description;
            product.price = productData.price;
            product.stock = productData.stock;
           //product.imgUrl = productData.imgUrl || 'default-image-url.png';
            product.category = category;
            return product;
        });
    
        await this.productRepository.addProducts(newProducts);
    }
}

