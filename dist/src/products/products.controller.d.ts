import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-products.dto";
import { Product } from "./products.entity";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProducts(CreateProductDto: CreateProductDto): Promise<Product>;
    getProducts(page?: number, limit?: number): Promise<Product[]>;
    getProduct(id: string): Promise<Product>;
    updateProducts(id: string, updateProduct: UpdateProductDto): Promise<Product>;
    deleteProducts(id: string): Promise<{
        id: string;
    }>;
}
