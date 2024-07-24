import { IsBoolean, IsNumber, IsString } from "class-validator";

export class createProductDto {
        @IsString()
        name: string;

        @IsString()
        description: string;

        @IsNumber()
        price: number;

        @IsBoolean()
        stock: boolean;

        @IsString()
        imgUrl: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: boolean;
    imgUrl: string;
}