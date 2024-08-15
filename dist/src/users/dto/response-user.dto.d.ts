export default class UserResponseDto {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: number;
    country?: string;
    city?: string;
    constructor(partial: Partial<UserResponseDto>);
}
