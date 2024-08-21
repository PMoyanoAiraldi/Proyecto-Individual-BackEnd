import { AuthService } from "./auth.service";
import { SignInAuthDto } from "./dto/signin.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(credentials: SignInAuthDto): Promise<"Has inciado sesión correctamente" | "Email o contraseña incorrectos. Por favor intenta nuevamente" | "Error al iniciar sesión. Por favor intenta nuevamente">;
    getAuth(): string;
}
