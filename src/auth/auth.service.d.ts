import { UsersService } from "../users/users.service";
import { SignInAuthDto } from "./dto/signin.dto";
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    signIn(credentials: SignInAuthDto): Promise<"Has inciado sesión correctamente" | "Email o contraseña incorrectos. Por favor intenta nuevamente" | "Error al iniciar sesión. Por favor intenta nuevamente">;
    getAuth(): string;
}
