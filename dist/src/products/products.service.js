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
    getProducts() {
        return this.productsRepository.getProducts();
    }
    getProduct(id) {
        return this.productsRepository.getProductById(id);
    }
    createProduct(createProductDto) {
        return this.productsRepository.createProduct(createProductDto);
    }
    async seedProducts(products) {
        const categories = await this.categoriesRepository.getCategories();
        const newProducts = products.map(productData => {
            const category = categories.find(cat => cat.name === productData.category.name);
            if (!category) {
                throw new Error(`Category '${productData.category.name}' not found`);
            }
            const product = new products_entity_1.Product();
            product.name = productData.name;
            product.description = productData.description;
            product.price = productData.price;
            product.stock = productData.stock;
            product.imgUrl = productData.imgUrl || 'default-image-url.png';
            product.category = category;
            return product;
        });
        await this.productsRepository.addProducts(newProducts);
    }
    updateProduct(id, updateProductDto) {
        return this.productsRepository.updateProduct(id, updateProductDto);
    }
    removeProduct(id) {
        return this.productsRepository.removeProduct(id);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository,
        categories_repository_1.CategoriesRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map