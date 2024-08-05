import { IsNumber, IsString } from "class-validator";

export class createProductDto {
        @IsString()
        name: string;

        @IsString()
        description: string;

        @IsNumber()
        price: number;

        @IsNumber()
        stock: number;

        @IsString()
        imgUrl: string;

        @IsString()
        category: string;
}

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
}