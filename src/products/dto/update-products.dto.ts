// import { IsNumber, IsString } from "class-validator";

// export class UpdateProductDto{    
//             @IsString()
//             name: string;
    
//             @IsString()
//             description: string;
    
//             @IsNumber()
//             price: number;
    
//             @IsNumber()
//             stock: number;
    
//             @IsString()
//             imgUrl: string;
    

//             constructor(partial: Partial<UpdateProductDto>){ 
//                 const {stock} = partial;
//                 this.stock = stock;
//             }
// }

import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto'; // Asegúrate de tener un DTO base para crear productos

export class UpdateProductDto extends PartialType(CreateProductDto) {}
