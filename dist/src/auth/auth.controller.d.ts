import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { SignUpAuthDto } from "./dto/signup-auth.dto";
import UserResponseDto from "../users/dto/response-user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(credentials: LoginUserDto): Promise<{
        token: string;
    }>;
    signUp(signUpUser: SignUpAuthDto, request: any): Promise<UserResponseDto>;
    getAuth(): Promise<void>;
}
