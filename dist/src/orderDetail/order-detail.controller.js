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
exports.OrderDetailController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const create_order_detail_dto_1 = require("./dto/create-order-detail.dto");
const order_detail_service_1 = require("./order-detail.service");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
let OrderDetailController = class OrderDetailController {
    constructor(orderDetailService) {
        this.orderDetailService = orderDetailService;
    }
    async createOrderDetail(createOrderDetailDto) {
        return await this.orderDetailService.createOrder(createOrderDetailDto);
    }
    async getOrder(id) {
        const orderDetail = await this.orderDetailService.getOrderDetailsByOrderId((id));
        if (!(0, class_validator_1.IsUUID)(4, { each: true })) {
            throw new common_1.HttpException('UUID inválido', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!orderDetail) {
            throw new common_1.HttpException('El detalle de la orden no fue encontrado', common_1.HttpStatus.NOT_FOUND);
        }
        return orderDetail;
    }
};
exports.OrderDetailController = OrderDetailController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./order-detail.entity").OrderDetail }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_detail_dto_1.CreateOrderDetailDto]),
    __metadata("design:returntype", Promise)
], OrderDetailController.prototype, "createOrderDetail", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: [require("./order-detail.entity").OrderDetail] }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderDetailController.prototype, "getOrder", null);
exports.OrderDetailController = OrderDetailController = __decorate([
    (0, swagger_1.ApiTags)('OrderDetail'),
    (0, common_1.Controller)('orderdetail'),
    __metadata("design:paramtypes", [order_detail_service_1.OrderDetailService])
], OrderDetailController);
//# sourceMappingURL=order-detail.controller.js.map