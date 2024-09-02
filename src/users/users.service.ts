import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { User } from "./users.entity";
import { UsersRepository } from "./users.repository";
import { UserWithAdminDto } from "./dto/admin-user.dto";


@Injectable()
export class UsersService{
    constructor (
        private readonly usersRepository: UsersRepository
    ){}

    async getUsers(page: number = 1, limit: number = 5): Promise<UserWithAdminDto[]>{
        return this.usersRepository.getUsers(page, limit);
    }

    async getUserById(id: string){
        return this.usersRepository.getUserById(id)
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


    


