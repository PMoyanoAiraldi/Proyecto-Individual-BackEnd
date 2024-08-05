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
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("./products.entity");
const typeorm_2 = require("typeorm");
let ProductsRepository = class ProductsRepository {
    constructor(productRepo) {
        this.productRepo = productRepo;
        this.products = [
            {
                id: 1,
                name: 'Zapatilla',
                description: 'Zapatillas negras de ecocuero con plataforma',
                price: 44.595,
                stock: 1,
                imgUrl: 'https://reginabags.mitiendanube.com/productos/converse-de-ecocuero/'
            },
            {
                id: 2,
                name: 'Bandolera',
                description: 'Bandolera negra con tachas',
                price: 37.960,
                stock: 1,
                imgUrl: 'https://reginabags.mitiendanube.com/productos/bandolera-izzie/'
            },
            {
                id: 3,
                name: 'Riñonera',
                description: 'Riñonera con tres cierres delanteros',
                price: 31.300,
                stock: 1,
                imgUrl: 'https://reginabags.mitiendanube.com/productos/rinonera-juana/'
            }
        ];
    }
    async addProducts(products) {
        const existingProducts = await this.productRepo.find();
        const newProducts = products.filter((product) => !existingProducts.some((prod) => prod.name === product.name));
        return this.productRepo.save(newProducts);
    }
    async getProducts() {
        return this.products;
    }
    getProductById(id) {
        return this.products.find((product) => product.id === id);
    }
    createProduct(createProductDto) {
        const newProduct = {
            id: this.products.length + 1,
            ...createProductDto
        };
        this.products.push(newProduct);
        return newProduct.id;
    }
    updateProduct(id, productUpdate) {
        const product = this.getProductById(id);
        const updateProduct = {
            ...product,
            ...productUpdate,
        };
        this.products = this.products.map((product) => (product.id === id ? updateProduct : product));
        return updateProduct;
    }
    removeProduct(id) {
        this.products = this.products.filter((product) => product.id !== id);
        return id;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map