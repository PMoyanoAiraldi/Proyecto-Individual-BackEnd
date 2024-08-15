import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { responseProductDto } from "./dto/response-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { Product } from "./products.entity";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<Product[]>;
    seedProducts(products: Product[]): Promise<void>;
    createProducts(CreateProductDto: CreateProductDto): Promise<Product>;
    getProduct(id: string): Promise<responseProductDto>;
    updateProducts(id: string, updateProduct: updateProductDto): Promise<Product>;
    deleteProducts(id: string): Promise<{
        id: string;
    }>;
}
