import { CloudinaryService } from '../service/cloudinary-service/cloudinary/cloudinary.service';
import { ProductRepository } from '../products/products.repository';
export declare class FileUploadRepository {
    private readonly cloudinaryService;
    private readonly productsRepository;
    constructor(cloudinaryService: CloudinaryService, productsRepository: ProductRepository);
    uploadFile(file: Express.Multer.File, productId: string): Promise<{
        imgUrl: string;
    }>;
}
