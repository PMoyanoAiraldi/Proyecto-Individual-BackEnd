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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("../users/users.service");
const products_service_1 = require("../products/products.service");
const orders_repository_1 = require("./orders.repository");
const order_detail_service_1 = require("../orderDetail/order-detail.service");
let OrderService = class OrderService {
    constructor(orderRepository, userService, productsService, orderDetailService) {
        this.orderRepository = orderRepository;
        this.userService = userService;
        this.productsService = productsService;
        this.orderDetailService = orderDetailService;
    }
    createOrder(createOrderDto) {
        return this.orderRepository.addOrder(createOrderDto);
    }
    getOrder(id) {
        try {
            const orderDetail = this.orderRepository.getOrder(id);
            return orderDetail;
        }
        catch (error) {
            throw new common_1.NotFoundException(error.message);
        }
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orders_repository_1.OrderRepository)),
    __metadata("design:paramtypes", [orders_repository_1.OrderRepository,
        users_service_1.UsersService,
        products_service_1.ProductsService,
        order_detail_service_1.OrderDetailService])
], OrderService);
//# sourceMappingURL=orders.service.js.map