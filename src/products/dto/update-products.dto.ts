import { IsBoolean, IsNumber, IsString } from "class-validator";

export class updateProductDto{    
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