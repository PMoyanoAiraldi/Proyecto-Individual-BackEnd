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
exports.OrderRepository = void 0;
const typeorm_1 = require("typeorm");
const orders_entity_1 = require("./orders.entity");
const typeorm_2 = require("@nestjs/typeorm");
const products_service_1 = require("../products/products.service");
const users_service_1 = require("../users/users.service");
const create_order_detail_dto_1 = require("../orderDetail/dto/create-order-detail.dto");
const response_order_dto_1 = require("./dto/response-order.dto");
const order_detail_entity_1 = require("../orderDetail/order-detail.entity");
let OrderRepository = class OrderRepository {
    constructor(orderRepository, orderDetailRepository, userService, productService) {
        this.orderRepository = orderRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.userService = userService;
        this.productService = productService;
    }
    async addOrder(createOrderDto) {
        const { userId, products } = createOrderDto;
        const user = await this.userService.getUserById(userId);
        const order = this.orderRepository.create({
            user: user,
            date: new Date(),
        });
        const orderEntity = await this.orderRepository.save(order);
        const total = await this.calculateTotal(products);
        const orderDetail = new create_order_detail_dto_1.CreateOrderDetailDto();
        orderDetail.price = total;
        orderDetail.products = products;
        orderDetail.order = orderEntity;
        const orderDetailEntity = this.orderDetailRepository.create(orderDetail);
        await this.orderDetailRepository.save(orderDetail);
        return new response_order_dto_1.OrderResponseDto(orderDetailEntity);
    }
    async calculateTotal(products) {
        let total = 0;
        for (const product of products) {
            total += await this.productService.buyProduct(product.id);
        }
        return total;
    }
    async getOrder(id) {
        const order = await this.orderRepository.findOne({
            where: { id },
            relations: ['orderDetail', 'orderDetail.products']
        });
        if (!order) {
            throw new Error('La orden no fue encontrada');
        }
        const orderDetail = await this.orderDetailRepository.findOne({
            where: { order: { id } },
            relations: ['products', 'order']
        });
        if (!orderDetail) {
            throw new Error('Detalles de la orden no fueron encontrados');
        }
        return new response_order_dto_1.OrderResponseDto(orderDetail);
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    __param(0, (0, typeorm_2.InjectRepository)(orders_entity_1.Order)),
    __param(1, (0, typeorm_2.InjectRepository)(order_detail_entity_1.OrderDetail)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        users_service_1.UsersService,
        products_service_1.ProductsService])
], OrderRepository);
//# sourceMappingURL=orders.repository.js.map