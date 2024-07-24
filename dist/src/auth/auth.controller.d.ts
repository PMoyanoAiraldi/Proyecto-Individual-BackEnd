import { AuthService } from "./auth.service";
import { SignInAuthDto } from "./dto/signin.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(credentials: SignInAuthDto): "Has inciado sesión correctamente" | "Email o contraseña incorrectos. Por favor intenta nuevamente";
    getAuth(): string;
}
