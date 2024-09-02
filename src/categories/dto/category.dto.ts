import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto{
    /**
     * El nombre de la categoría del producto
     * @example 'monitor'
     */
    @IsString()
    @IsNotEmpty({ message: 'El campo de nombre no puede estar vacío' })
    name: string;
}