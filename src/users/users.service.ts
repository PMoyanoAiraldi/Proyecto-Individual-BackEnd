import { Injectable } from "@nestjs/common";
import UserDto from "./dto/response-user.dto";
import { createUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService{

    constructor (
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>
    ){}

    // createUser(createUserDto: createUserDto){
    //     return this.usersRepository.createUser(createUserDto)
    // }
    

    // updateUsers(id: number, updateUserDto: updateUserDto){
    //     return this.usersRepository.updateUsers(id, updateUserDto)
    // }

    // removeUsers(id: number){
    //     return this.usersRepository.removeUsers(id)
    // }

    // findOneByEmail(email: string){
    //     return this.usersRepository.findOneEmail(email)
    // }

    findOne(id: string) {
        return this.usersRepository.findOne({where: {id}})
    }


}