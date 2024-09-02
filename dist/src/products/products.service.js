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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("./products.repository");
const categories_repository_1 = require("../categories/categories.repository");
const products_entity_1 = require("./products.entity");
let ProductsService = class ProductsService {
    constructor(productsRepository, categoriesRepository) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async getProducts(page = 1, limit = 5) {
        return this.productsRepository.getProducts(page, limit);
    }
    async getProduct(id) {
        return await this.productsRepository.getProductById(id);
    }
    async createProduct(createProductDto) {
        return this.productsRepository.createProduct(createProductDto);
    }
    async updateProduct(id, updateProductDto) {
        return this.productsRepository.updateProduct(id, updateProductDto);
    }
    async removeProduct(id) {
        return this.productsRepository.removeProduct(id);
    }
    async seedProducts(products) {
        const categories = await this.categoriesRepository.getCategories();
        const newProducts = [];
        for (const productData of products) {
            const category = categories.find(cat => cat.name === productData.category.name);
            if (!category) {
                throw new common_1.BadRequestException(`Category '${productData.category.name}' not found`);
            }
            const exists = await this.productsRepository.getProductByName(productData.name);
            if (!exists) {
                const product = new products_entity_1.Product();
                product.name = productData.name;
                product.description = productData.description;
                product.price = productData.price;
                product.stock = productData.stock;
                product.imgUrl = productData.imgUrl || 'default-image-url.png';
                product.category = category;
                newProducts.push(product);
            }
        }
        await this.productsRepository.addProducts(newProducts);
    }
    async buyProduct(id) {
        const product = await this.productsRepository.getProductById(id);
        if (!product) {
            throw new common_1.BadRequestException('Producto no encontrado');
        }
        if (product.stock === 0) {
            throw new common_1.BadRequestException("Stock agotado");
        }
        const updateProductDto = {
            stock: product.stock - 1,
        };
        try {
            await this.productsRepository.updateProduct(id, updateProductDto);
        }
        catch (error) {
            throw new common_1.BadRequestException('Error al actualizar el producto');
        }
        console.log("Producto comprado exitosamente");
        return product.price;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductRepository,
        categories_repository_1.CategoriesRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map