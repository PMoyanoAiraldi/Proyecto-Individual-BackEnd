export declare class SignUpAuthDto {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    address: string;
    phone: number;
    country?: string;
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
