import { IsEmail, IsNumber, IsOptional, IsString, Matches } from "class-validator";

export class updateUserDto{
    /**
     * Nombre del usuario
     * @example 'Paula'
     */
    @IsString()
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
            "La contraseña debe contener al menos una minúscula, una mayúscula, un número, un caracter especial y tenga entre 8 a 15 caracteres"
        }
    )
    password: string;

    /**
     * La dirección donde vive el usuario
     * @example 'Rivadavia 1500'
     */
    @IsString()
    address: string;


    /**
     * El teléfono del usuario
     * @example '15510256'
     */
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
    @IsOptional()
    city?: string;
}