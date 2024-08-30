"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
class UserResponseDto {
    constructor(partial) {
        const { name, email, address, phone, country, city } = partial;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.country = country;
        this.city = city;
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, email: { required: true, type: () => String }, password: { required: true, type: () => String }, address: { required: true, type: () => String }, phone: { required: true, type: () => Number }, country: { required: false, type: () => String }, city: { required: false, type: () => String } };
    }
}
exports.default = UserResponseDto;
//# sourceMappingURL=response-user.dto.js.map