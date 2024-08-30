import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class SignUpAuthDto{
    @IsNotEmpty()
    @IsString()
    @MaxLength(80)
    @MinLength(3)
    name: string;

    @IsEmail()
    email: string;

    
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[=!@#$%^&*])[A-Za-z\d=!@#$%^&*]{8,15}$/,
        {
            message:
            "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*)"
        }
    )
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    passwordConfirm: string;

    @MaxLength(80)
    @MinLength(3)
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @MaxLength(20)
    @MinLength(5)
    @IsOptional()
    city?: string;

    constructor(partial: Partial<SignUpAuthDto>) {
        Object.assign(this, partial);
    }
}

