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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const orders_repository_1 = require("./orders.repository");
const response_order_dto_1 = require("./dto/response-order.dto");
let OrderService = class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async createOrder(createOrderDto) {
        return this.orderRepository.addOrder(createOrderDto);
    }
    async getOrder(id) {
        const order = await this.orderRepository.getOrder(id);
        if (!order.orderDetail) {
            throw new common_1.NotFoundException('El detalle de la orden no fue encontrado');
        }
        if (!order) {
            throw new common_1.NotFoundException('La orden no fue encontrada');
        }
        return new response_order_dto_1.OrderResponseDto(order.orderDetail);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [orders_repository_1.OrderRepository])
], OrderService);
//# sourceMappingURL=orders.service.js.map