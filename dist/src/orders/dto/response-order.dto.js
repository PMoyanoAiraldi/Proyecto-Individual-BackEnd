"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResponseDto = void 0;
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
}
exports.OrderResponseDto = OrderResponseDto;
//# sourceMappingURL=response-order.dto.js.map