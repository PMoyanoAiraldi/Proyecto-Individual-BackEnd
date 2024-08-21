import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-products.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./products.entity";
import { EntityManager, Repository } from "typeorm";
import { Category } from "../categories/categories.entity";

@Injectable()
export class ProductRepository {
    constructor (private readonly entityManager: EntityManager) {}
    
async addProducts(products: Product[]): Promise<Product[]> {
    const existingProducts = await this.entityManager.find(Product);//encuentra los productos existentes en la BD
    const newProducts = products.filter( 
        (product) => !existingProducts.some((prod) => prod.name === product.name),//filtra los productos que no estan en la BD
    );

    return this.entityManager.save(Product, newProducts);//guarda los nuevos productos
}

async getProducts(): Promise<Product[]>{
    
    return this.entityManager.find(Product)
}

async getProductById(id: string): Promise<Product>{
    return this.entityManager.findOne(Product, {where: {id}})
}

async getProductByName(name: string): Promise<Product> {
    return this.entityManager.findOne(Product,{ where: { name } });
}

async createProduct(createProductDto: CreateProductDto, category: Category): Promise<Product>{
    const newProduct = this.entityManager.create(Product,{
        ...createProductDto,
        category //asociamos la categoria con el producto
    });
    await this.entityManager.save(Product, newProduct);
    return newProduct
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

