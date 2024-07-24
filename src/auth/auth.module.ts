import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersService } from "../users/users.service";
import { UsersRepository } from "../users/users.repository";



@Module({
    providers: [AuthService, UsersService, UsersRepository],
    controllers: [AuthController],
})
export class AuthModule{}