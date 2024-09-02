import { IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateProductDto{   
    
            /**
            * El nombre del producto
            * @example 'Samsung Galaxy'
            */
            @IsString()
            @IsOptional()
            name?: string;
    

            /**
            * La descripción del producto
            * @example 'The best smartphone in the world'
            */
            @IsString()
            @IsOptional()
            description?: string;
    

            /**
            * El precio del producto
            * @example '250.50'
            */
            @IsNumber()
            @IsOptional()
            price?: number;
    

            /**
            * La cantidad disponible de ese producto
            * @example '15'
            */
            @IsNumber()
            @IsOptional()
            stock?: number;
    

            /**
            * La url de la imagen del producto
            * @example 'default-image-url.jpg'
            */
            @IsString()
            @IsOptional()
            imgUrl?: string;
    

}


