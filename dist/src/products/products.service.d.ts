import { ProductsRepository } from "./products.repository";
import { createProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[]>;
    getProduct(id: number): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    };
    createProduct(createProductDto: createProductDto): number;
    updateProduct(id: number, updateProductDto: updateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
        id: number;
    };
    removeProduct(id: number): number;
}
