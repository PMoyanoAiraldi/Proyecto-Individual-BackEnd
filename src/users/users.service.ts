import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import UserDto from "./dto/response-user.dto";
import { createUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersService{

    constructor (private usersRepository: UsersRepository){}
    getUsers(){
        return this.usersRepository.getUsers()
    }

    getUser(id: number){
        return this.usersRepository.getUserById(id)
    }

    createUser(createUserDto: createUserDto){
        return this.usersRepository.createUser(createUserDto)
    }

    updateUsers(id: number, updateUserDto: updateUserDto){
        return this.usersRepository.updateUsers(id, updateUserDto)
    }

    removeUsers(id: number){
        return this.usersRepository.removeUsers(id)
    }

    findOneByEmail(email: string){
        return this.usersRepository.findOneEmail(email)
    }


}