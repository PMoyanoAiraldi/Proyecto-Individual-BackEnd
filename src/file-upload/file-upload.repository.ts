import { Injectable } from '@nestjs/common';
import { CloudinaryService } from '../service/cloudinary-service/cloudinary/cloudinary.service';
import { FileUploadDto } from './dto/file-upload.dto';


@Injectable()
export class FileUploadRepository {
    constructor(private readonly cloudinaryService: CloudinaryService){}

    async uploadFile(file: FileUploadDto){
        return this.cloudinaryService.uploadFile(file.buffer, file.originalname)
    }
}
