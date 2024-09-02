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
exports.User = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const orders_entity_1 = require("../orders/orders.entity");
let User = class User {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, description: "El id del usuario", example: "e2d481f2-735e-428f-8a24-c296956dccf9" }, name: { required: true, type: () => String, description: "Nombre del usuario", example: "Paula" }, email: { required: true, type: () => String, description: "Debe ser un email v\u00E1lido", example: "ejemplo@mail.com" }, password: { required: true, type: () => String, description: "La contrase\u00F1a debe contener al menos una letra min\u00FAscula, una letra may\u00FAscula, un n\u00FAmero y un car\u00E1cter especial (!@#$%^&*)", example: "Ejemplo*1" }, phone: { required: true, type: () => Number, description: "El tel\u00E9fono del usuario", example: "15510256" }, country: { required: true, type: () => String, description: "El pa\u00EDs donde vive el usuario", example: "Argentina" }, address: { required: true, type: () => String, description: "La direcci\u00F3n donde vive el usuario", example: "Rivadavia 1500" }, city: { required: true, type: () => String, description: "La ciudad donde vive el usuario", example: "L\u00F3pez" }, admin: { required: true, type: () => Boolean, description: "Rol del usuario, si es 'usuario' o 'administrador'", example: "false" }, orders: { required: true, type: () => [require("../orders/orders.entity").Order], description: "El arreglo con la informaci\u00F3n de la orden" } };
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, unique: true, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orders_entity_1.Order, order => order.user),
    __metadata("design:type", Array)
], User.prototype, "orders", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({
        name: 'users'
    })
], User);
//# sourceMappingURL=users.entity.js.map