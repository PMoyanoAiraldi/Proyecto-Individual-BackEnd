import { Injectable } from '@nestjs/common';
import { FileUploadDto } from './dto/file-upload.dto';
import { FileUploadRepository } from './file-upload.repository';


@Injectable()
export class FileUploadService {
    constructor(private readonly fileUploadRepository: FileUploadRepository){}

    async uploadFile(file: Express.Multer.File, productId: string){
        return this.fileUploadRepository.uploadFile(file, productId)
    }
}
