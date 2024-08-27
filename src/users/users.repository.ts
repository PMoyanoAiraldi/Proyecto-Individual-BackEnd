import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { EntityManager, Repository } from "typeorm";


export class UsersRepository {
    constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager
    ){}

    async getUsers(): Promise<User[]> {
        return this.entityManager.find(User); 
    }

    async getUserById(id: string): Promise<User | undefined>{
        return this.entityManager.findOne(User, { where: {id}})
    }

    async createUser(createUserDto: CreateUserDto): Promise <User>{
        const newUser = new User();
        console.log(newUser);
        Object.assign(newUser, createUserDto);
        await this.entityManager.save(newUser);
        return newUser;
    }

    async findOneEmail(email: string){
        return this.entityManager.findOne(User, {where: {email}})
    }


    async updateUsers(id: string, userUpdate: updateUserDto): Promise <User>{
        const user = await this.entityManager.findOne(User, { where: {id}});
        if(!user){
            throw new Error(`El usuario con ${id} no fue encontrado`);
        }
        Object.assign(user, userUpdate);// Actualiza las propiedades del usuario con los datos del DTO
        await this.entityManager.save(user)
        return user;
    }

    async removeUsers(id: string): Promise <string>{
        const user = await this.entityManager.findOne(User,{ where: {id}});
        if(!user){
            throw new Error(`El usuario con ${id} no fue encontrado`);
        }
        await this.entityManager.remove(user);
        return id;
    }
}