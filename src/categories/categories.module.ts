import { Module } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./categories.entity";
import { CategoriesRepository } from "./categories.repository";
import { CategorySeeder } from "./categories.seeder";
//import { CategoriesSeed } from "../seeds/categories/categories.seed";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers: [CategoriesService, CategoriesRepository, CategorySeeder],
    controllers: [CategoriesController],
    exports: [CategoriesService, CategoriesRepository, CategorySeeder]
})

export class CategoriesModule{}