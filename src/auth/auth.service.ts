import { HttpException, HttpStatus, Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { hash, compare} from 'bcrypt'
import { UsersService } from "../users/users.service";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/users.entity";
import { SignUpAuthDto } from "./dto/signup-auth.dto";

@Injectable()
export class AuthService{
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ){}

    async signIn(loginUser: LoginUserDto): Promise<{token: string}>{
        const user = await this.userService.findOneByEmail(loginUser.email);

        // Validar si el usuario existe y si la contraseña es correcta
        const isPasswordMatchin = user && await compare(loginUser.password, user.password) //comparamos la contraseña hasheada con la contraseña del usuario
        
        if(!isPasswordMatchin){
            throw new HttpException('Email o password incorrectos', HttpStatus.UNAUTHORIZED)
        }

        const token = await this.createToken(user);
        return {token}

        }

        private async createToken(user: User){
            const payload = {
                id: user.id,
                email: user.email,
                admin: user.admin
            };
            return this.jwtService.signAsync(payload)
        }
    
    async signUp(signUp: SignUpAuthDto): Promise<User>{
        if(signUp.password !== signUp.passwordConfirm){
            throw new HttpException('La contraseña no coincide', 400)
        }
        //signUp.password = await hash(signUp.password, 10)//10 es el N° de caracteres que se agregue al crear el hash 

        const hashedPassword = await hash(signUp.password, 10);
        signUp.password = hashedPassword;
        console.log('Hashed password:', signUp.password);
        return this.userService.createUser(signUp)
    }

    
}