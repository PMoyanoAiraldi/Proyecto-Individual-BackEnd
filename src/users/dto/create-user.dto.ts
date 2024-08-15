import { IsEmail, IsNumber, IsOptional, IsString, Matches } from "class-validator";


export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[=!@#$%^&*])[A-Za-z\d=!@#$%^&*]{8,15}$/,
        {
            message:
            "La contraseña debe contener al menos una minúscula, una mayúscula, un número, un caracter especial y tenga entre 8 a 15 caracteres"
        }
    )
    password: string;

    @IsString()
    address: string;

    @IsNumber()
    phone: number;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    city?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    address: string;
    phone: number;
    country?: string;
    city?: string;
}