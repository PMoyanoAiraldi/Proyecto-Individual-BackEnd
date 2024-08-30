import { FileUploadRepository } from './file-upload.repository';
export declare class FileUploadService {
    private readonly fileUploadRepository;
    constructor(fileUploadRepository: FileUploadRepository);
    uploadFile(file: Express.Multer.File, productId: string): Promise<{
        imgUrl: string;
    }>;
}
