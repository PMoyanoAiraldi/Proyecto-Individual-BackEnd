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
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const products_entity_1 = require("./products.entity");
const typeorm_1 = require("typeorm");
let ProductRepository = class ProductRepository {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async addProducts(products) {
        const existingProducts = await this.entityManager.find(products_entity_1.Product);
        const newProducts = products.filter((product) => !existingProducts.some((prod) => prod.name === product.name));
        return this.entityManager.save(products_entity_1.Product, newProducts);
    }
    async getProducts(page, limit) {
        const offset = (page - 1) * limit;
        return this.entityManager.find(products_entity_1.Product, {
            skip: offset,
            take: limit
        });
    }
    async getProductById(id) {
        return this.entityManager.findOne(products_entity_1.Product, { where: { id } });
    }
    async getProductByName(name) {
        return this.entityManager.findOne(products_entity_1.Product, { where: { name } });
    }
    async createProduct(createProductDto, category) {
        const newProduct = this.entityManager.create(products_entity_1.Product, {
            ...createProductDto,
            category
        });
        await this.entityManager.save(products_entity_1.Product, newProduct);
        return newProduct;
    }
    async updateProduct(id, productUpdate) {
        await this.entityManager.update(products_entity_1.Product, id, productUpdate);
        return this.entityManager.findOneBy(products_entity_1.Product, { id });
    }
    async removeProduct(id) {
        await this.entityManager.delete(products_entity_1.Product, id);
        return { id };
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], ProductRepository);
//# sourceMappingURL=products.repository.js.map