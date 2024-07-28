"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseProductDto = void 0;
class responseProductDto {
    constructor(partial) {
        const { name, description, price, stock, imgUrl } = partial;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imgUrl = imgUrl;
    }
}
exports.responseProductDto = responseProductDto;
//# sourceMappingURL=response-product.dto.js.map