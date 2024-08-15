"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRepository = void 0;
const typeorm_1 = require("typeorm");
const categories_entity_1 = require("./categories.entity");
class CategoriesRepository extends typeorm_1.Repository {
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
        return this.save(newCategories);
    }
    async getCategories() {
        return this.find();
    }
    async findOneById(id) {
        return this.findOne({ where: { id } });
    }
}
exports.CategoriesRepository = CategoriesRepository;
//# sourceMappingURL=categories.repository.js.map