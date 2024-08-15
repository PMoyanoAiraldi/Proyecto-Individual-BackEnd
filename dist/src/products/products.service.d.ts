import { ProductRepository } from "./products.repository";
import { CreateProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { CategoriesRepository } from "../categories/categories.repository";
import { Product } from "./products.entity";
export declare class ProductsService {
    private productsRepository;
    private categoriesRepository;
    constructor(productsRepository: ProductRepository, categoriesRepository: CategoriesRepository);
    getProducts(): Promise<Product[]>;
    getProduct(id: string): Promise<Product>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    seedProducts(products: Product[]): Promise<void>;
    findAll(page: number, limit: number): Promise<Product[]>;
    updateProduct(id: string, updateProductDto: updateProductDto): Promise<Product>;
    removeProduct(id: string): Promise<{
        id: string;
    }>;
    buyProduct(id: string): Promise<number>;
}
