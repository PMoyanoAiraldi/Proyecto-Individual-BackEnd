import { Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { ProductRepository } from "./products.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./products.entity";
import { Category } from "../categories/categories.entity";
import { CategoriesRepository } from "../categories/categories.repository";
import { CategorySeeder } from "../categories/categories.seeder";
import { CategoriesModule } from "../categories/categories.module";



@Module({
    imports: [TypeOrmModule.forFeature([Product,  Category]), CategoriesModule],
    providers: [ProductsService,ProductRepository, CategoriesRepository,CategorySeeder],
    controllers: [ProductsController],
    exports: [ProductsService]
})
export class ProductsModule{}