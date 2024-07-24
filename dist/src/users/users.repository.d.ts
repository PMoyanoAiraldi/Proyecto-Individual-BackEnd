import { createUserDto, User } from "./dto/create-user.dto";
import { updateUserDto } from "./dto/update-user.dto";
export declare class UsersRepository {
    private users;
    getUsers(): User[];
    getUserById(id: number): User;
    createUser(createUserDto: createUserDto): number;
    findOneEmail(email: string): User;
    updateUsers(id: number, userUpdate: updateUserDto): {
        name: string;
        email: string;
        password: string;
        address: string;
        phone: string;
        country?: string;
        city?: string;
        id: number;
    };
    removeUsers(id: number): number;
}
