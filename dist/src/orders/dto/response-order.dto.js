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
exports.OrderResponseDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class OrderResponseDto {
    constructor(orderDetail) {
        this.id = orderDetail.id;
        this.price = orderDetail.price;
        this.products = orderDetail.products || [];
        this.order = orderDetail.order;
        if (orderDetail.order) {
            this.order = {
                id: orderDetail.order.id,
                date: orderDetail.order.date,
                user: {
                    id: orderDetail.order.user.id
                },
            };
        }
        else {
            this.order = null;
        }
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "El id de la orden", example: "e2d481f2-735e-428f-8a24-c296956dccf9" }, price: { required: true, type: () => Number, description: "El precio del producto", example: "250.50" }, products: { required: true, type: () => [Object] }, order: { required: true, type: () => ({ id: { required: true, type: () => String }, date: { required: true, type: () => Date }, user: { required: true, type: () => ({ id: { required: true, type: () => String } }) } }) } };
    }
}
exports.OrderResponseDto = OrderResponseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], OrderResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], OrderResponseDto.prototype, "price", void 0);
//# sourceMappingURL=response-order.dto.js.map