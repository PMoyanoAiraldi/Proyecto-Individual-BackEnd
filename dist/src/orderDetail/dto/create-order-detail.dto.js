"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderDetailDto = void 0;
const openapi = require("@nestjs/swagger");
class CreateOrderDetailDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { price: { required: true, type: () => Number }, order: { required: true, type: () => Object }, products: { required: true, type: () => [Object] } };
    }
}
exports.CreateOrderDetailDto = CreateOrderDetailDto;
//# sourceMappingURL=create-order-detail.dto.js.map