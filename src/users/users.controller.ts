import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, UseGuards, NotFoundException, ParseUUIDPipe, HttpException } from "@nestjs/common";
import { UsersService } from "./users.service";
import UserDto from "./dto/response-user.dto";
import UserResponseDto from "./dto/response-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "ecommerce-PMoyanoAiraldi/guard/auth/auth.guard";
import { User } from "./users.entity";
import { IsUUID } from "class-validator";

@Controller('users') //al colocar como parámetro 'users', define que la ruta será /users
export class UsersController{
    constructor(private readonly usersService: UsersService) {} //crea una propiedad privada de tipo UsersService que se va a llamar usersService que lo puedo usar en dentro de los otros métodos

    @Get()  
    @HttpCode(HttpStatus.OK)//para que el status sea 200
    @UseGuards(AuthGuard)
    getUsers(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 5
    ){ 
        return this.usersService.getUsers();
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async createUsers(@Body() CreateUserDto: CreateUserDto): Promise<User>{
        return this.usersService.createUser(CreateUserDto)
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async getUser(@Param('id', new ParseUUIDPipe()) id: string): Promise<UserResponseDto>{
        const user = await this.usersService.getUserById(id)
        if(!IsUUID(4, { each: true})){
            throw new HttpException('UUID inválido', HttpStatus.BAD_REQUEST)
        }
        if(!user){
            throw new HttpException('El usuario no fue encontrado', HttpStatus.NOT_FOUND)
        }
        return new UserResponseDto(user)
    }

    @Put('id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
    async updateUsers(@Param('id') id: string, @Body() updateUser: updateUserDto): Promise<User>{
        const user = await this.usersService.updateUsers(id, updateUser) 
        return user;
    }

    @Delete('id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)//@HttpCode(HttpStatus.NO_CONTENT) // 204 No Content for successful deletion
    async deleteUsers(@Param('id') id: string): Promise<void>{
        const result = await this.usersService.removeUsers(id)
        if(!result){
            throw new NotFoundException(`El usuario con ${id} no fue encontrado`);
        }
    }
}