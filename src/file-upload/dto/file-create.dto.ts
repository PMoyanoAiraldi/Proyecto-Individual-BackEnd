import { ApiProperty } from "@nestjs/swagger";

export class FileCreateDto{
    /**
     * El archivo que quiero cargar
     * @example 'example.png'
     */
    @ApiProperty({ type: 'string', format: 'binary' })
    file: any;
}