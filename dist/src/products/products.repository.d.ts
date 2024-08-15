import { CreateProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { Product } from "./products.entity";
import { Repository } from "typeorm";
import { Category } from "../categories/categories.entity";
export declare class ProductRepository extends Repository<Product> {
    addProducts(products: Product[]): Promise<Product[]>;
    getProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    getProductByName(name: string): Promise<Product>;
    createProduct(createProductDto: CreateProductDto, category: Category): Promise<Product>;
    updateProduct(id: string, productUpdate: updateProductDto): Promise<Product>;
    removeProduct(id: string): Promise<{
        id: string;
    }>;
}
