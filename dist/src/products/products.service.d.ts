import { ProductRepository } from "./products.repository";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-products.dto";
import { CategoriesRepository } from "../categories/categories.repository";
import { Product } from "./products.entity";
export declare class ProductsService {
    private readonly productsRepository;
    private readonly categoriesRepository;
    constructor(productsRepository: ProductRepository, categoriesRepository: CategoriesRepository);
    getProducts(): Promise<Product[]>;
    getProduct(id: string): Promise<Product>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    seedProducts(products: Product[]): Promise<void>;
    findAll(page: number, limit: number): Promise<Product[]>;
    updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    removeProduct(id: string): Promise<{
        id: string;
    }>;
    buyProduct(id: string): Promise<number>;
}
