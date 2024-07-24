import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import UserDto from "./dto/response-user.dto";
import UserResponseDto from "./dto/response-user.dto";
import { createUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "ecommerce-PMoyanoAiraldi/guard/auth/auth.guard";

@Controller('users') //al colocar como parámetro 'users', define que la ruta será /users
export class UsersController{
    constructor(private readonly usersService: UsersService) {} //crea una propiedad privada de tipo UsersService que se va a llamar usersService que lo puedo usar en dentro de los otros métodos

    @Get()  
    
    @HttpCode(HttpStatus.OK)//para que el status sea 200
    getUsers(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 5
    ){ 
        return this.usersService.getUsers();
    }


    @Post()
    @HttpCode(HttpStatus.CREATED)
    createUsers(@Body() CreateUserDto: createUserDto){
        return this.usersService.createUser(CreateUserDto)
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    getUser(@Param('id') id: string){
        const user = this.usersService.getUser(Number(id))
        return new UserResponseDto(user)
    }

    @Put('id')
    
    @HttpCode(HttpStatus.OK)
    updateUsers(@Param('id') id: string, @Body() updateUser: updateUserDto){
        return this.usersService.updateUsers(+id, updateUser)
    }

    @Delete('id')
    
    @HttpCode(HttpStatus.OK)
    deleteUsers(@Param('id') id: string){
        return this.usersService.removeUsers(+id)
    }
}