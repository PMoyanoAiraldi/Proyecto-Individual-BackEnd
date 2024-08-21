import { OnModuleInit } from '@nestjs/common';
import { ProductSeeder } from './products/products.seeder';
import { CategorySeeder } from './categories/categories.seeder';
export declare class AppModule implements OnModuleInit {
    private readonly productSeeder;
    private readonly categorySeeder;
    constructor(productSeeder: ProductSeeder, categorySeeder: CategorySeeder);
    onModuleInit(): Promise<void>;
}
