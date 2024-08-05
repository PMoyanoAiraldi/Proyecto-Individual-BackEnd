import { ProductsService } from "./products.service";
import { createProductDto } from "./dto/create-product.dto";
import { responseProductDto } from "./dto/response-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { Product } from "./products.entity";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: number;
        imgUrl: string;
    }[]>;
    seedProducts(products: Product[]): Promise<void>;
    createProducts(CreateProductDto: createProductDto): number;
    getProduct(id: string): responseProductDto;
    updateProducts(id: string, updateProduct: updateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: number;
        imgUrl: string;
        id: number;
    };
    deleteProducts(id: string): number;
}
