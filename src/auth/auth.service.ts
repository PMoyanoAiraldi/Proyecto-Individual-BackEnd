import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { LoginUserDto } from "./dto/login-user.dto";

@Injectable()
export class AuthService{
    constructor(private readonly userService: UsersService ){}

    async signIn(credentials: LoginUserDto): Promise<string>{
        try{
        const user = await this.userService.findOneByEmail(credentials.email);
        if(user && user.password === credentials.password){
            return "Has inciado sesión correctamente"
        }
        throw new UnauthorizedException ("Email o contraseña incorrectos. Por favor intenta nuevamente")
    }catch(error){
        throw new InternalServerErrorException ("Error al iniciar sesión. Por favor intenta nuevamente");
    }
    }


    getAuth(){
        return 'Get all auth'
    }
}