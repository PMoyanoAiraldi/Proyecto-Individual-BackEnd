import { Controller, Get, Post,  Body} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInAuthDto } from "./dto/signin.dto";


@Controller('auth') 
export class AuthController{
    constructor(private readonly authService: AuthService) {} 

    @Post('signin')
    signIn(@Body() credentials: SignInAuthDto){
        return this.authService.signIn(credentials)
    }

    @Get() 
    getAuth(){ //define el comportamiento
        return this.authService.getAuth();
    }

}