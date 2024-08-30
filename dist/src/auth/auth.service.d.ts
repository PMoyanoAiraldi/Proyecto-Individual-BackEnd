import { UsersService } from "../users/users.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/users.entity";
import { SignUpAuthDto } from "./dto/signup-auth.dto";
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signIn(loginUser: LoginUserDto): Promise<{
        token: string;
    }>;
    private createToken;
    signUp(signUp: SignUpAuthDto): Promise<User>;
}
