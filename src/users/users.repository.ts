import * as bcrypt from 'bcrypt';
import { CreateUserDto } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { EntityManager, Repository } from "typeorm";
import { UserWithAdminDto } from "./dto/admin-user.dto";


export class UsersRepository {
    constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager
    ){}

    async getUsers(page: number, limit: number): Promise<UserWithAdminDto[]> {
        const offset = (page - 1) * limit; //Es el número de registros a omitir (saltar) para empezar a recuperar los resultados desde una posición específica 
        //Por ejemplo: offset = (1 - 1) * 5 = 0
        //Recuperas los primeros 5 registros (LIMIT 5 OFFSET 0)

        const users = await this.entityManager.find(User,{
            skip: offset,// Salta los primeros resultados según el offset
            take: limit // Limita el número de resultados
        })
        
        return users.map(user => {
            const userDto = new UserWithAdminDto();
            userDto.name = user.name;
            userDto.email = user.email;
            userDto.address = user.address;
            userDto.phone = user.phone;
            userDto.country = user.country;
            userDto.city = user.city;
            userDto.admin = user.admin
            return userDto
        })
    }
    

    async getUserById(id: string): Promise<User | undefined>{
        return this.entityManager.findOne(User, { where: {id}})
    }

    async createUser(createUserDto: CreateUserDto): Promise <User>{
        const newUser = new User();
        console.log(newUser);
        Object.assign(newUser, createUserDto);
        console.log('Usuario antes de guardar:', newUser);
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
        // Verifica si se está actualizando la contraseña
        if (userUpdate.password) {
        // Hashea la nueva contraseña
        const salt = await bcrypt.genSalt(10);
        userUpdate.password = await bcrypt.hash(userUpdate.password, salt);
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