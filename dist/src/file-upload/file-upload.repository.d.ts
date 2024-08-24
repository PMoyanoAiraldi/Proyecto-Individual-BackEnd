import { CloudinaryService } from '../service/cloudinary-service/cloudinary/cloudinary.service';
import { FileUploadDto } from './dto/file-upload.dto';
export declare class FileUploadRepository {
    private readonly cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    uploadFile(file: FileUploadDto): Promise<string>;
}
