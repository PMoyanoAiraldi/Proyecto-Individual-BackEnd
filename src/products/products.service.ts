import { BadRequestException, Injectable } from "@nestjs/common";
import { ProductRepository } from "./products.repository";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-products.dto";
import { CategoriesRepository } from "../categories/categories.repository";
import { Product } from "./products.entity";
import { FileUploadRepository } from "../file-upload/file-upload.repository";
import { FileUploadDto } from "../file-upload/dto/file-upload.dto";

@Injectable()
export class ProductsService{
    
    constructor (
        private readonly productsRepository: ProductRepository,
        private readonly categoriesRepository: CategoriesRepository,
        
    ){}

    async getProducts(page: number = 1, limit: number = 5): Promise<Product[]>{
        return this.productsRepository.getProducts(page, limit)
    }

    async getProduct(id: string): Promise<Product>{
        return await this.productsRepository.getProductById(id)
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product>{
        const category = await this.categoriesRepository.findOneById(createProductDto.categoryId)
        if(!category){
            throw Error ('La categoria no fue encontrada')
        }
        return this.productsRepository.createProduct(createProductDto, category)
    }


    async updateProduct(id: string, updateProductDto: UpdateProductDto){
        return this.productsRepository.updateProduct(id, updateProductDto)
    }

    async removeProduct(id: string){
        return this.productsRepository.removeProduct(id)
    }


    async seedProducts(products: Product[]) {
        const categories = await this.categoriesRepository.getCategories();
        const newProducts = [];

        for (const productData of products) {
            const category = categories.find(cat => cat.name === productData.category.name);
            if (!category) {
                throw new BadRequestException(`Category '${productData.category.name}' not found`);
            }

            const exists = await this.productsRepository.getProductByName(productData.name);
            if (!exists) {
                const product = new Product();
                product.name = productData.name;
                product.description = productData.description;
                product.price = productData.price;
                product.stock = productData.stock;
                product.imgUrl = productData.imgUrl || 'default-image-url.png';
                product.category = category;
                newProducts.push(product);
            }
        }
    
        await this.productsRepository.addProducts(newProducts);
    }
    

    async buyProduct(id: string) {
        const product =  await this.productsRepository.getProductById(id);
        if (!product) {
            throw new BadRequestException('Producto no encontrado');
        }

        if(product.stock === 0){
            throw new BadRequestException ("Stock agotado")
        }

        // Crear instancia de UpdateProductDto
        const updateProductDto: UpdateProductDto = {
            stock: product.stock - 1,
        };

        try{// Actualizar stock del producto
            await this.productsRepository.updateProduct(id, updateProductDto);
        }catch (error) {
            throw new BadRequestException('Error al actualizar el producto');
        }
        
        console.log("Producto comprado exitosamente")
        return product.price;
    }

    
}