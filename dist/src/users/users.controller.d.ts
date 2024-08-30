import { UsersService } from "./users.service";
import UserResponseDto from "./dto/response-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { User } from "./users.entity";
import { UserWithAdminDto } from "./dto/admin-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsersPag(page?: number, limit?: number): Promise<UserWithAdminDto[]>;
    getUser(id: string): Promise<UserResponseDto>;
    updateUsers(id: string, updateUser: updateUserDto): Promise<User>;
    deleteUsers(id: string): Promise<{
        id: string;
    }>;
}
