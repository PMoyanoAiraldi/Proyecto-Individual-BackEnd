import { FileUploadService } from './file-upload.service';
import { ProductsService } from '../products/products.service';
export declare class FileUploadController {
    private readonly fileUploadService;
    private readonly productService;
    constructor(fileUploadService: FileUploadService, productService: ProductsService);
    uploadFile(id: string, file: Express.Multer.File): Promise<{
        imgUrl: string;
    }>;
}
