import { UsersService } from "./users.service";
import UserDto from "./dto/response-user.dto";
import { createUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page?: number, limit?: number): import("./dto/create-user.dto").User[];
    createUsers(CreateUserDto: createUserDto): number;
    getUser(id: string): UserDto;
    updateUsers(id: string, updateUser: updateUserDto): {
        name: string;
        email: string;
        password: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
        id: number;
    };
    deleteUsers(id: string): number;
}
