import { UsersService } from "./users.service";
import UserResponseDto from "./dto/response-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { User } from "./users.entity";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page?: number, limit?: number): Promise<User[]>;
    createUsers(CreateUserDto: CreateUserDto): Promise<User>;
    getUser(id: string): Promise<UserResponseDto>;
    updateUsers(id: string, updateUser: updateUserDto): Promise<User>;
    deleteUsers(id: string): Promise<void>;
}
