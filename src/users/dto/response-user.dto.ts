import { IsNumber, IsString } from "class-validator";

export default class UserResponseDto {

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
     * La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y un carácter especial (!@#$%^&*)
     * @example 'Ejemplo*1'
     */
    @IsString()
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
    country?: string;


    /**
     * La ciudad donde vive el usuario
     * @example 'López'
     */
    @IsString()
    city?: string;


    constructor(partial: Partial<UserResponseDto>){ //significa que puede venir otras propiedades o menos de las que declaro, por ejemplo password
        const {name, email, address, phone, country, city} = partial;
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.country = country;
        this.city = city;
    }
}


