import { Injectable } from '@nestjs/common';
import { CloudinaryService } from '../service/cloudinary-service/cloudinary/cloudinary.service';
import { FileUploadDto } from './dto/file-upload.dto';
import { ProductRepository } from '../products/products.repository';


@Injectable()
export class FileUploadRepository {
    constructor(
        private readonly cloudinaryService: CloudinaryService,
        private readonly productsRepository: ProductRepository
    ){}

    async uploadFile(file: Express.Multer.File, productId: string){
        const fileUploadDto: FileUploadDto = {
            fieldname: file.fieldname,
            buffer: file.buffer,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size
        }

        const url = await this.cloudinaryService.uploadFile(fileUploadDto.buffer, fileUploadDto.originalname)

        await this.productsRepository.updateProduct(productId, {imgUrl: url});
        return {imgUrl: url}
    }
}