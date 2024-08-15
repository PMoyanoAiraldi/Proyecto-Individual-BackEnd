import { ProductRepository } from './products.repository';
import { CategoriesRepository } from '../categories/categories.repository';
export declare class ProductSeeder {
    private readonly productRepository;
    private readonly categoryRepository;
    constructor(productRepository: ProductRepository, categoryRepository: CategoriesRepository);
    seedProducts(): Promise<void>;
}
