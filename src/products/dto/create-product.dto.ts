import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateProductDto {
        /**
         * El nombre del producto
         * @example 'Samsung Galaxy'
         */
        @IsString()
        name: string;

        /**
         * La descripción del producto
         * @example 'The best smartphone in the world'
         */
        @IsString()
        description: string;


        /**
        * El precio del producto
        * @example '250.50'
        */
        @IsNumber()
        price: number;


        /**
        * La cantidad disponible de ese producto
        * @example '15'
        */
        @IsNumber()
        stock: number;

        /**
        * La url de la imagen del producto
        * @example 'default-image-url.jpg'
        */
        @IsString()
        imgUrl: string;


        /**
        * El id de la categoria a la que pertenece el producto
        * @example 'e2d481f2-735e-428f-8a24-c296956dccf9'
        */
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