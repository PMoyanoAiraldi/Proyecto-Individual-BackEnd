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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const typeorm_2 = require("typeorm");
const admin_user_dto_1 = require("./dto/admin-user.dto");
let UsersRepository = class UsersRepository {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async getUsers(page, limit) {
        const offset = (page - 1) * limit;
        const users = await this.entityManager.find(users_entity_1.User, {
            skip: offset,
            take: limit
        });
        return users.map(user => {
            const userDto = new admin_user_dto_1.UserWithAdminDto();
            userDto.name = user.name;
            userDto.email = user.email;
            userDto.address = user.address;
            userDto.phone = user.phone;
            userDto.country = user.country;
            userDto.city = user.city;
            userDto.admin = user.admin;
            return userDto;
        });
    }
    async getUserById(id) {
        return this.entityManager.findOne(users_entity_1.User, { where: { id } });
    }
    async createUser(createUserDto) {
        const newUser = new users_entity_1.User();
        console.log(newUser);
        Object.assign(newUser, createUserDto);
        console.log('Usuario antes de guardar:', newUser);
        await this.entityManager.save(newUser);
        return newUser;
    }
    async findOneEmail(email) {
        return this.entityManager.findOne(users_entity_1.User, { where: { email } });
    }
    async updateUsers(id, userUpdate) {
        const user = await this.entityManager.findOne(users_entity_1.User, { where: { id } });
        if (!user) {
            throw new Error(`El usuario con ${id} no fue encontrado`);
        }
        if (userUpdate.password) {
            const salt = await bcrypt.genSalt(10);
            userUpdate.password = await bcrypt.hash(userUpdate.password, salt);
        }
        Object.assign(user, userUpdate);
        await this.entityManager.save(user);
        return user;
    }
    async removeUsers(id) {
        const user = await this.entityManager.findOne(users_entity_1.User, { where: { id } });
        if (!user) {
            throw new Error(`El usuario con ${id} no fue encontrado`);
        }
        await this.entityManager.remove(user);
        return id;
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    __param(0, (0, typeorm_1.InjectEntityManager)()),
    __metadata("design:paramtypes", [typeorm_2.EntityManager])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map