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
exports.updateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class updateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, description: "Nombre del usuario", example: "Paula" }, email: { required: true, type: () => String, description: "Debe ser un email v\u00E1lido", example: "ejemplo@mail.com" }, password: { required: true, type: () => String, description: "La contrase\u00F1a debe contener al menos una letra min\u00FAscula, una letra may\u00FAscula, un n\u00FAmero y un car\u00E1cter especial (!@#$%^&*)", example: "Ejemplo*1", pattern: "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[=!@#$%^&*])[A-Za-z\\d=!@#$%^&*]{8,15}$/" }, address: { required: true, type: () => String, description: "La direcci\u00F3n donde vive el usuario", example: "Rivadavia 1500" }, phone: { required: true, type: () => Number, description: "El tel\u00E9fono del usuario", example: "15510256" }, country: { required: false, type: () => String, description: "El pa\u00EDs donde vive el usuario", example: "Argentina" }, city: { required: false, type: () => String, description: "La ciudad donde vive el usuario", example: "L\u00F3pez" } };
    }
}
exports.updateUserDto = updateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], updateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[=!@#$%^&*])[A-Za-z\d=!@#$%^&*]{8,15}$/, {
        message: "La contraseña debe contener al menos una minúscula, una mayúscula, un número, un caracter especial y tenga entre 8 a 15 caracteres"
    }),
    __metadata("design:type", String)
], updateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], updateUserDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], updateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], updateUserDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], updateUserDto.prototype, "city", void 0);
//# sourceMappingURL=update-user.dto.js.map