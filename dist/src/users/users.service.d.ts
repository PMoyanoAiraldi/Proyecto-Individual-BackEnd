import { UsersRepository } from "./users.repository";
import { createUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): import("./dto/create-user.dto").User[];
    getUser(id: number): import("./dto/create-user.dto").User;
    createUser(createUserDto: createUserDto): number;
    updateUsers(id: number, updateUserDto: updateUserDto): {
        name: string;
        email: string;
        password: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
        id: number;
    };
    removeUsers(id: number): number;
    findOneByEmail(email: string): import("./dto/create-user.dto").User;
}
