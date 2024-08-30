"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseProductDto = void 0;
const openapi = require("@nestjs/swagger");
class responseProductDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, description: { required: true, type: () => String }, price: { required: true, type: () => Number }, stock: { required: true, type: () => Number }, imgUrl: { required: true, type: () => String } };
    }
}
exports.responseProductDto = responseProductDto;
//# sourceMappingURL=response-product.dto.js.map