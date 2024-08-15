import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { User } from "./users.entity";
import { UsersRepository } from "./users.repository";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    updateUsers(id: string, updateUserDto: updateUserDto): Promise<User>;
    removeUsers(id: string): Promise<string>;
}
