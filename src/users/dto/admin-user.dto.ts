import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UserWithAdminDto {

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
    @IsString()
    email: string;

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
    country: string;


    /**
     * La ciudad donde vive el usuario
     * @example 'López'
     */
    @IsString()
    city: string;

    /**
     * Rol del usuario, si es 'usuario' o 'administrador'
     * @example 'false'
     */
    @IsBoolean()
    admin: boolean;
}