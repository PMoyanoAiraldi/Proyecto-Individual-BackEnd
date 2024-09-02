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
exports.CategoriesRepository = void 0;
const typeorm_1 = require("typeorm");
const categories_entity_1 = require("./categories.entity");
const common_1 = require("@nestjs/common");
let CategoriesRepository = class CategoriesRepository {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async addCategories(categories) {
        const existingCategories = await this.getCategories();
        const existingCategoryNames = new Set(existingCategories.map(cat => cat.name));
        const newCategories = categories
            .filter(category => !existingCategoryNames.has(category.name))
            .map(category => {
            const newCategory = new categories_entity_1.Category();
            newCategory.name = category.name;
            return newCategory;
        });
        return this.entityManager.save(categories_entity_1.Category, newCategories);
    }
    async createCategory(categoryDto) {
        const existingCategory = await this.entityManager.findOne(categories_entity_1.Category, { where: { name: categoryDto.name } });
        if (existingCategory) {
            throw new common_1.BadRequestException('La categoria ya existe');
        }
        const newCategory = this.entityManager.create(categories_entity_1.Category, { name: categoryDto.name });
        return this.entityManager.save(categories_entity_1.Category, newCategory);
    }
    async getCategories() {
        return this.entityManager.find(categories_entity_1.Category);
    }
    async findOneById(id) {
        console.log('CategoriesRepository findOneById:', this);
        return this.entityManager.findOne(categories_entity_1.Category, { where: { id } });
    }
};
exports.CategoriesRepository = CategoriesRepository;
exports.CategoriesRepository = CategoriesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], CategoriesRepository);
//# sourceMappingURL=categories.repository.js.map