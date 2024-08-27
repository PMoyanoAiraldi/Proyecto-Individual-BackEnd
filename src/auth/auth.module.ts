import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersService } from "../users/users.service";
import { UsersRepository } from "../users/users.repository";
import { UsersModule } from "../users/users.module";
import { SharedModule } from '../../shared/shared/shared.module'
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/users.entity";


@Module({
    imports: [UsersModule, SharedModule, TypeOrmModule.forFeature([User])],
    providers: [AuthService, UsersService, UsersRepository],
    controllers: [AuthController],
})
export class AuthModule{}