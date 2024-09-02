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
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
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
        return { name: { required: true, type: () => String, description: "Nombre del usuario", example: "Paula" }, email: { required: true, type: () => String, description: "Debe ser un email v\u00E1lido", example: "ejemplo@mail.com" }, password: { required: true, type: () => String, description: "La contrase\u00F1a debe contener al menos una letra min\u00FAscula, una letra may\u00FAscula, un n\u00FAmero y un car\u00E1cter especial (!@#$%^&*)", example: "Ejemplo*1" }, address: { required: true, type: () => String, description: "La direcci\u00F3n donde vive el usuario", example: "Rivadavia 1500" }, phone: { required: true, type: () => Number, description: "El tel\u00E9fono del usuario", example: "15510256" }, country: { required: false, type: () => String, description: "El pa\u00EDs donde vive el usuario", example: "Argentina" }, city: { required: false, type: () => String, description: "La ciudad donde vive el usuario", example: "L\u00F3pez" } };
    }
}
exports.default = UserResponseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserResponseDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserResponseDto.prototype, "city", void 0);
//# sourceMappingURL=response-user.dto.js.map