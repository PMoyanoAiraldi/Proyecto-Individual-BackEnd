import { Controller, Get, Post,  Body, Req} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto} from "./dto/login-user.dto";
import { SignUpAuthDto } from "./dto/signup-auth.dto";
import UserResponseDto from "../users/dto/response-user.dto";


@Controller('auth') 
export class AuthController{
    constructor(private readonly authService: AuthService) {} 

    @Post('signin')
    async signIn(@Body() credentials: LoginUserDto){
        return this.authService.signIn(credentials)
    }

    @Post('signup')
    async signUp(@Body() signUpUser:SignUpAuthDto, @Req() request){
        const user = await this.authService.signUp(signUpUser)
        return new UserResponseDto(user)
    }

    @Get() 
    getAuth(){ 
        return this.authService.getAuth();
    }

}