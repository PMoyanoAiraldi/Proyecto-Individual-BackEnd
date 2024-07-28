import { createProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
export declare class ProductsRepository {
    private products;
    getProducts(): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    }[]>;
    getProductById(id: number): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
    };
    createProduct(createProductDto: createProductDto): number;
    updateProduct(id: number, productUpdate: updateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: boolean;
        imgUrl: string;
        id: number;
    };
    removeProduct(id: number): number;
}
