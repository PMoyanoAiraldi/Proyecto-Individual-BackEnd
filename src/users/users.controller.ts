import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Put, Delete, UseGuards, NotFoundException, ParseUUIDPipe, HttpException } from "@nestjs/common";
import { UsersService } from "./users.service";
import UserDto from "./dto/response-user.dto";
import UserResponseDto from "./dto/response-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "ecommerce-PMoyanoAiraldi/guard/auth.guard";
import { User } from "./users.entity";
import { IsUUID } from "class-validator";
import { Roles } from "../decorators/roles.decorator";
import { RolesGuard } from "ecommerce-PMoyanoAiraldi/guard/roles.guard";
import { UserWithAdminDto } from "./dto/admin-user.dto";
import { ApiBasicAuth, ApiBearerAuth, ApiQuery, ApiSecurity, ApiTags } from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users') 
export class UsersController{
    constructor(private readonly usersService: UsersService) {}


    @Get()  
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard, RolesGuard)
    @Roles('admin')
    @ApiSecurity('bearer')
    @ApiQuery({ name: 'page', required: false, description: 'Número de página', example: 1 })
    @ApiQuery({ name: 'limit', required: false, description: 'Cantidad de resultados por página', example: 5 })
    async getUsersPag(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 5
    ): Promise<UserWithAdminDto[]>{ 
        return this.usersService.getUsers(page, limit);
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    @ApiSecurity('bearer')
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

    @Put(':id')
    @UseGuards(AuthGuard)
    @ApiSecurity('bearer')
    @HttpCode(HttpStatus.OK)
    async updateUsers(@Param('id') id: string, @Body() updateUser: updateUserDto): Promise<User>{
        const user = await this.usersService.updateUsers(id, updateUser) 
        return user;
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @ApiSecurity('bearer')
    @HttpCode(HttpStatus.OK)
    async deleteUsers(@Param('id') id: string): Promise<{id: string}>{
        const result = await this.usersService.removeUsers(id)
        if(!result){
            throw new NotFoundException(`El usuario con ${id} no fue encontrado`);
        }

        return {id}
    }
}