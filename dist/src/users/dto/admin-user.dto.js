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
exports.UserWithAdminDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UserWithAdminDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, description: "Nombre del usuario", example: "Paula" }, email: { required: true, type: () => String, description: "Debe ser un email v\u00E1lido", example: "ejemplo@mail.com" }, address: { required: true, type: () => String, description: "La direcci\u00F3n donde vive el usuario", example: "Rivadavia 1500" }, phone: { required: true, type: () => Number, description: "El tel\u00E9fono del usuario", example: "15510256" }, country: { required: true, type: () => String, description: "El pa\u00EDs donde vive el usuario", example: "Argentina" }, city: { required: true, type: () => String, description: "La ciudad donde vive el usuario", example: "L\u00F3pez" }, admin: { required: true, type: () => Boolean, description: "Rol del usuario, si es 'usuario' o 'administrador'", example: "false" } };
    }
}
exports.UserWithAdminDto = UserWithAdminDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserWithAdminDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserWithAdminDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserWithAdminDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserWithAdminDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserWithAdminDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserWithAdminDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UserWithAdminDto.prototype, "admin", void 0);
//# sourceMappingURL=admin-user.dto.js.map