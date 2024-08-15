import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./products.entity";
import { Repository } from "typeorm";
import { Category } from "../categories/categories.entity";

@Injectable()
export class ProductRepository extends Repository<Product> {


async addProducts(products: Product[]): Promise<Product[]> {
    const existingProducts = await this.find();//encuentra los productos existentes en la BD
    const newProducts = products.filter( 
        (product) => !existingProducts.some((prod) => prod.name === product.name),//filtra los productos que no estan en la BD
    );

    return this.save(newProducts);//guarda los nuevos productos
}

async getProducts(): Promise<Product[]>{
    return this.find()
}

async getProductById(id: string): Promise<Product>{
    return this.findOne({where: {id}})
}

async getProductByName(name: string): Promise<Product> {
    return this.findOne({ where: { name } });
}

async createProduct(createProductDto: CreateProductDto, category: Category): Promise<Product>{
    const newProduct = this.create({
        ...createProductDto,
        category //asociamos la categoria con el producto
    });
    await this.save(newProduct);
    return newProduct
}


async updateProduct(id: string, productUpdate: updateProductDto): Promise<Product>{
    // const product = this.getProductById(id);
    // const updateProduct = {
    //     ...product,
    //     ...productUpdate,
    // };
    // this.products = this.products.map((product) => (product.id === id ? updateProduct : product))
    // return updateProduct;
    await this.update(id, productUpdate)
    return this.findOneBy({id})
}

async removeProduct(id: string): Promise<{id:string}>{
    await this.delete(id)
    return {id}
    // this.products = this.products.filter((product) => product.id !== id);
    // return id
}
}

