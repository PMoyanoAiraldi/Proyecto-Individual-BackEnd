import { IsNumber, IsString } from "class-validator";

export class updateProductDto{    
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