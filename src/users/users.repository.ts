import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";


export class UsersRepository extends Repository<User> {
    
    async getUsers(): Promise<User[]> {
        return this.find(); 
    }

    async getUserById(id: string): Promise<User | undefined>{
        return this.findOne({ where: {id}})
    }

    async createUser(createUserDto: CreateUserDto): Promise <User>{
        const newUser = this.create(createUserDto) // Crea una instancia del usuario con los datos del DTO
        await this.save(newUser);//Guarda el nuevo usuario en la BD
        return newUser;
    }

    async findOneEmail(email: string){
        return this.findOne({where: {email}})
    }


    async updateUsers(id: string, userUpdate: updateUserDto): Promise <User>{
        const user = await this.findOne({ where: {id}});
        if(!user){
            throw new Error(`El usuario con ${id} no fue encontrado`);
        }
        Object.assign(user, userUpdate);// Actualiza las propiedades del usuario con los datos del DTO
        await this.save(user)
        return user;
    }

    async removeUsers(id: string): Promise <string>{
        const user = await this.findOne({ where: {id}});
        if(!user){
            throw new Error(`El usuario con ${id} no fue encontrado`);
        }
        await this.remove(user);
        return id;
    }
}