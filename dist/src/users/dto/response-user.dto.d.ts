export default class UserResponseDto {
    name: string;
    email: string;
    address: string;
    phone: string;
    country?: string;
    city?: string;
    constructor(partial: Partial<UserResponseDto>);
}
