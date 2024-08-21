import { Injectable, OnModuleInit } from '@nestjs/common';
import { ProductsService } from './products.service';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from './products.repository';
import { CategoriesRepository } from '../categories/categories.repository';
import { productData } from './products.data';
import { Product } from './products.entity';
import { CategorySeeder } from '../categories/categories.seeder';

@Injectable()
export class ProductSeeder implements OnModuleInit{
    constructor(
        private readonly productRepository: ProductRepository,
        private readonly categoryRepository: CategoriesRepository,
        private readonly categorySeeder: CategorySeeder
    ) {}

    async onModuleInit() {
        await this.categorySeeder.onModuleInit(); // Asegúrate de que las categorías se carguen primero
        await this.seedProducts();
    }

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

