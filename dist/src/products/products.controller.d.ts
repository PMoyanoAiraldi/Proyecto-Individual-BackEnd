import { ProductsService } from "./products.service";
import { createProductDto } from "./dto/create-product.dto";
import { responseProductDto } from "./dto/response-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[]>;
    createProducts(CreateProductDto: createProductDto): number;
    getProduct(id: string): responseProductDto;
    updateProducts(id: string, updateProduct: updateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
        id: number;
    };
    deleteProducts(id: string): number;
}
