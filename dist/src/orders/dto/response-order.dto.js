"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResponseDto = void 0;
const openapi = require("@nestjs/swagger");
class OrderResponseDto {
    constructor(orderDetail) {
        this.id = orderDetail.id;
        this.price = orderDetail.price;
        this.products = orderDetail.products;
        this.order = {
            id: orderDetail.order.id,
            date: orderDetail.order.date,
            user: {
                id: orderDetail.order.user.id
            },
        };
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, price: { required: true, type: () => Number }, products: { required: true, type: () => [Object] }, order: { required: true, type: () => ({ id: { required: true, type: () => String }, date: { required: true, type: () => Date }, user: { required: true, type: () => ({ id: { required: true, type: () => String } }) } }) } };
    }
}
exports.OrderResponseDto = OrderResponseDto;
//# sourceMappingURL=response-order.dto.js.map