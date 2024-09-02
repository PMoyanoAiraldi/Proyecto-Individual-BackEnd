import { ApiProperty } from "@nestjs/swagger";
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class ProductId{

    /**
     * El id del producto que quiero guardar en la orden
     * @example 'e2d481f2-735e-428f-8a24-c296956dccf9'
     */
    @IsUUID()
    @IsNotEmpty()
    id: string;
}

export class CreateOrderDto{

    /**
     * El id del usuario que va a crear la orden
     * @example 'e2d481f2-735e-428f-8a24-c296956dccf9'
     */
    @IsUUID()
    @IsNotEmpty()
    userId: string;

    
    @IsArray()
    @ArrayMinSize(1)
    @ApiProperty({ type: [ProductId] })
    products: Array<ProductId>
}