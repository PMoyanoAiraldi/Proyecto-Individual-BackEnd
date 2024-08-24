import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login-user.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(credentials: LoginUserDto): Promise<string>;
    getAuth(): string;
}
