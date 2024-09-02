import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-products.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./products.entity";
import { EntityManager, Repository } from "typeorm";
import { Category } from "../categories/categories.entity";
import { CategoriesRepository } from "../categories/categories.repository";

@Injectable()
export class ProductRepository {
    constructor (
        private readonly entityManager: EntityManager,
        private readonly categoriesRepository: CategoriesRepository
    ) {}

async createProduct(createProductDto: CreateProductDto): Promise<Product>{
      // Verificar si ya existe un producto con el mismo nombre en la base de datos
        const existingProduct = await this.entityManager.findOne(Product, { where: { name: createProductDto.name } });
        if (existingProduct) {
            throw new BadRequestException(`El producto con el nombre '${createProductDto.name}' ya existe.`);
    }

      // Buscar la categoría asociada al producto
        const category = await this.categoriesRepository.findOneById(createProductDto.categoryId);
        if (!category) {
            throw new BadRequestException(`La categoría con ID '${createProductDto.categoryId}' no fue encontrada`);
        }

        if (existingProduct && (!createProductDto.imgUrl || createProductDto.imgUrl === 'string')) {
            createProductDto.imgUrl = existingProduct.imgUrl; // Mantener la URL existente
        } else if (!createProductDto.imgUrl || createProductDto.imgUrl === 'string') {
            createProductDto.imgUrl = 'default-image-url.png'; // Asignar el valor por defecto
        }


      // Crear el nuevo producto
        const newProduct = this.entityManager.create(Product, {
            ...createProductDto,
            category,
        });

      // Guardar el nuevo producto en la base de datos
        await this.entityManager.save(Product, newProduct);
        return newProduct;
    }

async addProducts(products: Product[]): Promise<Product[]> {
    const existingProducts = await this.entityManager.find(Product);//encuentra los productos existentes en la BD
    const newProducts = products.filter( 
        (product) => !existingProducts.some((prod) => prod.name === product.name),//filtra los productos que no estan en la BD
    );

    return this.entityManager.save(Product, newProducts);//guarda los nuevos productos
}

async getProducts(page: number, limit: number): Promise<Product[]>{
    const offset = (page - 1) * limit;
    return this.entityManager.find(Product,{
        skip: offset,
        take: limit
    })
}

async getProductById(id: string): Promise<Product>{
    return this.entityManager.findOne(Product, {where: {id}})
}

async getProductByName(name: string): Promise<Product> {
    return this.entityManager.findOne(Product,{ where: { name } });
}


async updateProduct(id: string, productUpdate: UpdateProductDto): Promise<Product>{
    await this.entityManager.update(Product, id, productUpdate)
    return this.entityManager.findOneBy(Product, {id})
}

async removeProduct(id: string): Promise<{id:string}>{
    await this.entityManager.delete(Product, id)
    return {id}
}
}

