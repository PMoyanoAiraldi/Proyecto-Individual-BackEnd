"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
let ProductsRepository = class ProductsRepository {
    constructor() {
        this.products = [
            {
                id: 1,
                name: 'Zapatilla',
                description: 'Zapatillas negras de ecocuero con plataforma',
                price: 44.595,
                stock: true,
                imgUrl: 'https://reginabags.mitiendanube.com/productos/converse-de-ecocuero/'
            },
            {
                id: 2,
                name: 'Bandolera',
                description: 'Bandolera negra con tachas',
                price: 37.960,
                stock: true,
                imgUrl: 'https://reginabags.mitiendanube.com/productos/bandolera-izzie/'
            },
            {
                id: 3,
                name: 'Riñonera',
                description: 'Riñonera con tres cierres delanteros',
                price: 31.300,
                stock: true,
                imgUrl: 'https://reginabags.mitiendanube.com/productos/rinonera-juana/'
            }
        ];
    }
    async getProducts() {
        return this.products;
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)()
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map