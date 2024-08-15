"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    async addProducts(products) {
        const existingProducts = await this.find();
        const newProducts = products.filter((product) => !existingProducts.some((prod) => prod.name === product.name));
        return this.save(newProducts);
    }
    async getProducts() {
        return this.find();
    }
    async getProductById(id) {
        return this.findOne({ where: { id } });
    }
    async getProductByName(name) {
        return this.findOne({ where: { name } });
    }
    async createProduct(createProductDto, category) {
        const newProduct = this.create({
            ...createProductDto,
            category
        });
        await this.save(newProduct);
        return newProduct;
    }
    async updateProduct(id, productUpdate) {
        await this.update(id, productUpdate);
        return this.findOneBy({ id });
    }
    async removeProduct(id) {
        await this.delete(id);
        return { id };
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, common_1.Injectable)()
], ProductRepository);
//# sourceMappingURL=products.repository.js.map