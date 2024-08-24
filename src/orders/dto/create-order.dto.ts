import { ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUUID } from "class-validator";

export interface ProductId{
    id: string;
}

export class CreateOrderDto{
    @IsUUID()
    @IsNotEmpty()
    userId: string;

    @IsArray()
    @ArrayMinSize(1)
    products: Array<ProductId>
}