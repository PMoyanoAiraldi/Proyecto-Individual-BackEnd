export default class UserResponseDto {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: number;
    country?: string;
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


