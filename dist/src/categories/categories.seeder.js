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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySeeder = void 0;
const common_1 = require("@nestjs/common");
const categories_repository_1 = require("./categories.repository");
const categories_data_1 = require("./categories.data");
const categories_entity_1 = require("./categories.entity");
let CategorySeeder = class CategorySeeder {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async onModuleInit() {
        await this.seedCategory();
    }
    async seedCategory(categories = categories_data_1.categoriesData) {
        const existingCategories = await this.categoryRepository.getCategories();
        const newCategories = categories_data_1.categoriesData.filter(category => !existingCategories.some(existingCategories => existingCategories.name === category.name))
            .map(category => {
            const newCategory = new categories_entity_1.Category();
            newCategory.name = category.name;
            return newCategory;
        });
        if (newCategories.length > 0) {
            await this.categoryRepository.addCategories(newCategories);
        }
    }
};
exports.CategorySeeder = CategorySeeder;
exports.CategorySeeder = CategorySeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [categories_repository_1.CategoriesRepository])
], CategorySeeder);
//# sourceMappingURL=categories.seeder.js.map