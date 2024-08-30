"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWithAdminDto = void 0;
const openapi = require("@nestjs/swagger");
class UserWithAdminDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, email: { required: true, type: () => String }, address: { required: true, type: () => String }, phone: { required: true, type: () => Number }, country: { required: true, type: () => String }, city: { required: true, type: () => String }, admin: { required: true, type: () => Boolean } };
    }
}
exports.UserWithAdminDto = UserWithAdminDto;
//# sourceMappingURL=admin-user.dto.js.map