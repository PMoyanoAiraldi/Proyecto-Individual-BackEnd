"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_repository_1 = require("./products.repository");
const categories_repository_1 = require("../categories/categories.repository");
const products_data_1 = require("./products.data");
const products_entity_1 = require("./products.entity");
let ProductSeeder = class ProductSeeder {
    constructor(productRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }
    async seedProducts() {
        const categories = await this.categoryRepository.getCategories();
        const newProducts = products_data_1.productData.map(productData => {
            const category = categories.find(cat => cat.name === productData.category);
            if (!category) {
                throw new Error(`Category '${productData.category}' not found`);
            }
            const product = new products_entity_1.Product;
            product.name = productData.name;
            product.description = productData.description;
            product.price = productData.price;
            product.stock = productData.stock;
            product.category = category;
            return product;
        });
        await this.productRepository.addProducts(newProducts);
    }
};
exports.ProductSeeder = ProductSeeder;
exports.ProductSeeder = ProductSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_repository_1.ProductRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_repository_1.CategoriesRepository)),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository,
        categories_repository_1.CategoriesRepository])
], ProductSeeder);
//# sourceMappingURL=products.seeder.js.map