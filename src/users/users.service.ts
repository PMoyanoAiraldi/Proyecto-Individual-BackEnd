import { Injectable, NotFoundException } from "@nestjs/common";
import UserDto from "./dto/response-user.dto";
import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";
import { UsersRepository } from "./users.repository";
import UserResponseDto from "./dto/response-user.dto";


@Injectable()
export class UsersService{
    constructor (
        @InjectRepository(UsersRepository)
        private readonly usersRepository: UsersRepository
    ){}

    async getUsers(): Promise<User[]>{
        return this.usersRepository.getUsers();
    }

    async getUserById(id: string){
        return this.usersRepository.getUserById(id)
        // const user = await this.usersRepository.getUserById(id)
        // if(!user){
        //     throw new NotFoundException(`El usuario con ${id} no fue encontrado`);
        // }
        // // Mapear la entidad de usuario a DTO
        // const userResponseDto = new UserResponseDto({
        //     name: user.name,
        //     email: user.email,
        //     address: user.address,
        //     phone: user.phone,
        //     country: user.country,
        //     city: user.city,
        // });

        // return userResponseDto;
    }

    async createUser(createUserDto: CreateUserDto): Promise<User>{
        return this.usersRepository.createUser(createUserDto);
    }

    async findOneByEmail(email: string){
        return this.usersRepository.findOneEmail(email)
    }

    async updateUsers(id: string, updateUserDto: updateUserDto): Promise<User>{
        return this.usersRepository.updateUsers(id, updateUserDto)
    }

    async removeUsers(id: string): Promise<string>{
        return this.usersRepository.removeUsers(id)
    }

    }


    


