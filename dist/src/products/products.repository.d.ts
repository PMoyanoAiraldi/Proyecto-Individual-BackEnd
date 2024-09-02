import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-products.dto";
import { Product } from "./products.entity";
import { EntityManager } from "typeorm";
import { CategoriesRepository } from "../categories/categories.repository";
export declare class ProductRepository {
    private readonly entityManager;
    private readonly categoriesRepository;
    constructor(entityManager: EntityManager, categoriesRepository: CategoriesRepository);
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    addProducts(products: Product[]): Promise<Product[]>;
    getProducts(page: number, limit: number): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    getProductByName(name: string): Promise<Product>;
    updateProduct(id: string, productUpdate: UpdateProductDto): Promise<Product>;
    removeProduct(id: string): Promise<{
        id: string;
    }>;
}
