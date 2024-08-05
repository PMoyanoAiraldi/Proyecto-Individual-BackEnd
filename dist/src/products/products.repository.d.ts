import { createProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { Product } from "./products.entity";
import { Repository } from "typeorm";
export declare class ProductsRepository {
    private readonly productRepo;
    constructor(productRepo: Repository<Product>);
    private products;
    addProducts(products: Product[]): Promise<Product[]>;
    getProducts(): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: number;
        imgUrl: string;
    }[]>;
    getProductById(id: number): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: number;
        imgUrl: string;
    };
    createProduct(createProductDto: createProductDto): number;
    updateProduct(id: number, productUpdate: updateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: number;
        imgUrl: string;
        id: number;
    };
    removeProduct(id: number): number;
}
