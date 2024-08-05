import { ProductsRepository } from "./products.repository";
import { createProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { CategoriesRepository } from "../categories/categories.repository";
import { Product } from "./products.entity";
export declare class ProductsService {
    private productsRepository;
    private categoriesRepository;
    constructor(productsRepository: ProductsRepository, categoriesRepository: CategoriesRepository);
    getProducts(): Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        stock: number;
        imgUrl: string;
    }[]>;
    getProduct(id: number): {
        id: number;
        name: string;
        description: string;
        price: number;
        stock: number;
        imgUrl: string;
    };
    createProduct(createProductDto: createProductDto): number;
    seedProducts(products: Product[]): Promise<void>;
    updateProduct(id: number, updateProductDto: updateProductDto): {
        name: string;
        description: string;
        price: number;
        stock: number;
        imgUrl: string;
        id: number;
    };
    removeProduct(id: number): number;
}
