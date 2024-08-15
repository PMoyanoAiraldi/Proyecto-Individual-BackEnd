import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateProductDto {
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

        @IsUUID()
        categoryId: string;
}

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
}