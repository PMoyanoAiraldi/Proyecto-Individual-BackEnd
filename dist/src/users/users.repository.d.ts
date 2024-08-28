import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { User } from "./users.entity";
import { EntityManager } from "typeorm";
import { UserWithAdminDto } from "./dto/admin-user.dto";
export declare class UsersRepository {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    getUsers(): Promise<UserWithAdminDto[]>;
    getUserById(id: string): Promise<User | undefined>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findOneEmail(email: string): Promise<User>;
    updateUsers(id: string, userUpdate: updateUserDto): Promise<User>;
    removeUsers(id: string): Promise<string>;
}
