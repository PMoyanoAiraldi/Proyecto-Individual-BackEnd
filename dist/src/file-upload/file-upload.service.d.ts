import { FileUploadDto } from './dto/file-upload.dto';
import { FileUploadRepository } from './file-upload.repository';
export declare class FileUploadService {
    private readonly fileUploadRepository;
    constructor(fileUploadRepository: FileUploadRepository);
    uploadFile(file: FileUploadDto): Promise<string>;
}
