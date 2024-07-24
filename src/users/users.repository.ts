import { Injectable } from "@nestjs/common";
import { createUserDto, User } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UsersRepository{
    private users: User[] = [{
        id: 1, 
        name: 'Paula',
        email: 'pmoyano@gmail.com',
        password: 'password1',
        address: 'Rivadavia S/N',
        phone: '14525587',
        country:'Argentina',
        city: 'López'
    },
    {
        id: 1, 
        name: 'Florencia',
        email: 'flori9809@gmail.com',
        password: 'password2',
        address: 'Rivadavia S/N',
        phone: '5454412',
        country:'Argentina',
        city: 'López'
    },
    {
        id: 3, 
        name: 'Facundo',
        email: 'facu@gmail.com',
        password: 'password3',
        address: 'Rivadavia S/N',
        phone: '36557822',
        country:'Argentina',
        city: 'López'
    }

        
    ];

    

    getUsers(){//no es asincrono todavia porque usamos el array
        return this.users
    }

    getUserById(id: number){
        return this.users.find((user) => user.id === id)
    }

    createUser(createUserDto: createUserDto){
        const newUser = {
            id : this.users.length + 1,
            ...createUserDto
        } 
        this.users.push(newUser)
        return newUser.id;
    }

    findOneEmail(email: string){
        return this.users.find((user) => user.email === email)
    }


    updateUsers(id: number, userUpdate: updateUserDto){
        const user = this.getUserById(id);
        const updateUser = {
            ...user,
            ...userUpdate,
        };
        this.users = this.users.map((user) => (user.id === id ? updateUser : user))
        return updateUser;
    }

    removeUsers(id: number){
        this.users = this.users.filter((user) => user.id !== id);
        return id
    }
}