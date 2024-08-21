import { OnModuleInit } from '@nestjs/common';
import { ProductRepository } from './products.repository';
import { CategoriesRepository } from '../categories/categories.repository';
import { CategorySeeder } from '../categories/categories.seeder';
export declare class ProductSeeder implements OnModuleInit {
    private readonly productRepository;
    private readonly categoryRepository;
    private readonly categorySeeder;
    constructor(productRepository: ProductRepository, categoryRepository: CategoriesRepository, categorySeeder: CategorySeeder);
    onModuleInit(): Promise<void>;
    seedProducts(): Promise<void>;
}
