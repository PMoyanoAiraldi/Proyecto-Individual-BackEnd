import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { SignInAuthDto } from "./dto/signin.dto";

@Injectable()
export class AuthService{
    constructor(private readonly userService: UsersService ){}

    async signIn(credentials: SignInAuthDto){
        try{
        const user = await this.userService.findOneByEmail(credentials.email);
        if(user && user.password === credentials.password){
            return "Has inciado sesión correctamente"
        }
        return "Email o contraseña incorrectos. Por favor intenta nuevamente"
    }catch(error){
        return "Error al iniciar sesión. Por favor intenta nuevamente";
    }
    }


    getAuth(){
        return 'Get all auth'
    }
}