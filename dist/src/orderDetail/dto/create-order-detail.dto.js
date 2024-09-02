"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderDetailDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateOrderDetailDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { price: { required: true, type: () => Number, description: "El precio del producto", example: "250.50" }, order: { required: true, type: () => Object, description: "La orden creada por el usuario" }, products: { required: true, type: () => [Object], description: "Los productos elegidos por el usuario" } };
    }
}
exports.CreateOrderDetailDto = CreateOrderDetailDto;
//# sourceMappingURL=create-order-detail.dto.js.map