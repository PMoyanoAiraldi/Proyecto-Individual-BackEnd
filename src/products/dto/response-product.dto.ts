import { IsNumber, IsString } from "class-validator";

export class responseProductDto{
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

}