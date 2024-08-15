import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { User } from "./users.entity";
import { Repository } from "typeorm";
export declare class UsersRepository extends Repository<User> {
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User | undefined>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findOneEmail(email: string): Promise<User>;
    updateUsers(id: string, userUpdate: updateUserDto): Promise<User>;
    removeUsers(id: string): Promise<string>;
}
