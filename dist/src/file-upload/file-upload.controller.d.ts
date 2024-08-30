import { FileUploadService } from './file-upload.service';
export declare class FileUploadController {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadFile(productId: string, file: Express.Multer.File): Promise<{
        imgUrl: string;
    }>;
}
