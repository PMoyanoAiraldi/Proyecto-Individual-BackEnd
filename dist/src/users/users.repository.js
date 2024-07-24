"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
let UsersRepository = class UsersRepository {
    constructor() {
        this.users = [{
                id: 1,
                name: 'Paula',
                email: 'pmoyano@gmail.com',
                password: 'password1',
                address: 'Rivadavia S/N',
                phone: '14525587',
                country: 'Argentina',
                city: 'López'
            },
            {
                id: 1,
                name: 'Florencia',
                email: 'flori9809@gmail.com',
                password: 'password2',
                address: 'Rivadavia S/N',
                phone: '5454412',
                country: 'Argentina',
                city: 'López'
            },
            {
                id: 3,
                name: 'Facundo',
                email: 'facu@gmail.com',
                password: 'password3',
                address: 'Rivadavia S/N',
                phone: '36557822',
                country: 'Argentina',
                city: 'López'
            }
        ];
    }
    getUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find((user) => user.id === id);
    }
    createUser(createUserDto) {
        const newUser = {
            id: this.users.length + 1,
            ...createUserDto
        };
        this.users.push(newUser);
        return newUser.id;
    }
    findOneEmail(email) {
        return this.users.find((user) => user.email === email);
    }
    updateUsers(id, userUpdate) {
        const user = this.getUserById(id);
        const updateUser = {
            ...user,
            ...userUpdate,
        };
        this.users = this.users.map((user) => (user.id === id ? updateUser : user));
        return updateUser;
    }
    removeUsers(id) {
        this.users = this.users.filter((user) => user.id !== id);
        return id;
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)()
], UsersRepository);
//# sourceMappingURL=users.repository.js.map