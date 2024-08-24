import { UsersService } from "../users/users.service";
import { LoginUserDto } from "./dto/login-user.dto";
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    signIn(credentials: LoginUserDto): Promise<string>;
    getAuth(): string;
}
