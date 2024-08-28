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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signIn(loginUser) {
        const user = await this.userService.findOneByEmail(loginUser.email);
        if (!user) {
            throw new common_1.HttpException('Usuario no encontrado', 404);
        }
        const isPasswordMatchin = await (0, bcrypt_1.compare)(loginUser.password, user.password);
        if (!isPasswordMatchin) {
            throw new common_1.HttpException('Credenciales incorrectas', 400);
        }
        const token = await this.createToken(user);
        return { token };
    }
    async createToken(user) {
        const payload = {
            id: user.id,
            email: user.email,
            admin: user.admin
        };
        return this.jwtService.signAsync(payload);
    }
    async signUp(signUp) {
        if (signUp.password !== signUp.passwordConfirm) {
            throw new common_1.HttpException('La contraseña no coincide', 400);
        }
        signUp.password = await (0, bcrypt_1.hash)(signUp.password, 10);
        return this.userService.createUser(signUp);
    }
    async getAuth() {
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map