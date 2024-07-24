import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { SignInAuthDto } from "./dto/signin.dto";

@Injectable()
export class AuthService{
    constructor(private readonly userService: UsersService ){}

    signIn(credentials: SignInAuthDto){
        const user = this.userService.findOneByEmail(credentials.email);
        if(user && user.password === credentials.password){
            return "Has inciado sesión correctamente"
        }
        return "Email o contraseña incorrectos. Por favor intenta nuevamente"
    }


    getAuth(){
        return 'Get all auth'
    }
}