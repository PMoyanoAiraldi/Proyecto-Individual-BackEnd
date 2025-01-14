"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const products_controller_1 = require("./products.controller");
const products_repository_1 = require("./products.repository");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("./products.entity");
const categories_entity_1 = require("../categories/categories.entity");
const categories_module_1 = require("../categories/categories.module");
const products_seeder_1 = require("./products.seeder");
const cloudinary_service_1 = require("../service/cloudinary-service/cloudinary/cloudinary.service");
const file_upload_repository_1 = require("../file-upload/file-upload.repository");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([products_entity_1.Product, categories_entity_1.Category]), categories_module_1.CategoriesModule],
        providers: [products_service_1.ProductsService, products_repository_1.ProductRepository, products_seeder_1.ProductSeeder, file_upload_repository_1.FileUploadRepository, cloudinary_service_1.CloudinaryService],
        controllers: [products_controller_1.ProductsController],
        exports: [products_service_1.ProductsService, products_repository_1.ProductRepository, products_seeder_1.ProductSeeder]
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map