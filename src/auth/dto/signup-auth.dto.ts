import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches, MaxLength, MinLength } from "class-validator";

export class SignUpAuthDto{

    /**
     * Nombre del usuario
     * @example 'Paula'
     */
    @IsNotEmpty()
    @IsString()
    @MaxLength(80)
    @MinLength(3)
    name: string;


    /**
     * Debe ser un email válido
     * @example 'ejemplo@mail.com'
     */
    @IsEmail()
    email: string;

    /**
     * La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*)
     * @example 'Ejemplo*1'
     */
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[=!@#$%^&*])[A-Za-z\d=!@#$%^&*]{8,15}$/,
        {
            message:
            "La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*)"
        }
    )
    @IsString()
    password: string;

    /**
     * La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*)
     * @example 'Ejemplo*1'
     */
    @IsNotEmpty()
    @IsString()
    passwordConfirm: string;

    /**
     * La dirección donde vive el usuario
     * @example 'Rivadavia 1500'
     */
    @MaxLength(80)
    @MinLength(3)
    @IsString()
    address: string;

    /**
     * El teléfono del usuario
     * @example '15510256'
     */
    @IsNotEmpty()
    @IsNumber()
    phone: number;


    /**
     * El país donde vive el usuario
     * @example 'Argentina'
     */
    @IsString()
    @IsOptional()
    country?: string;


    /**
     * La ciudad donde vive el usuario
     * @example 'López'
     */
    @IsString()
    @MaxLength(20)
    @MinLength(5)
    @IsOptional()
    city?: string;

    constructor(partial: Partial<SignUpAuthDto>) {
        Object.assign(this, partial);
    }
}

