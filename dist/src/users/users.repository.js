"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const typeorm_1 = require("typeorm");
class UsersRepository extends typeorm_1.Repository {
    async getUsers() {
        return this.find();
    }
    async getUserById(id) {
        return this.findOne({ where: { id } });
    }
    async createUser(createUserDto) {
        const newUser = this.create(createUserDto);
        await this.save(newUser);
        return newUser;
    }
    async findOneEmail(email) {
        return this.findOne({ where: { email } });
    }
    async updateUsers(id, userUpdate) {
        const user = await this.findOne({ where: { id } });
        if (!user) {
            throw new Error(`El usuario con ${id} no fue encontrado`);
        }
        Object.assign(user, userUpdate);
        await this.save(user);
        return user;
    }
    async removeUsers(id) {
        const user = await this.findOne({ where: { id } });
        if (!user) {
            throw new Error(`El usuario con ${id} no fue encontrado`);
        }
        await this.remove(user);
        return id;
    }
}
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map