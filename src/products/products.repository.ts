import { Injectable } from "@nestjs/common";
import { createProductDto } from "./dto/create-product.dto";
import { updateProductDto } from "./dto/update-products.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "./products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductsRepository{
    constructor(
        @InjectRepository(Product)
        private readonly productRepo: Repository<Product>
    ){}
    private products = [
    {
        id: 1,
        name: 'Zapatilla',
        description: 'Zapatillas negras de ecocuero con plataforma',
        price: 44.595,
        stock: 1,
        imgUrl: 'https://reginabags.mitiendanube.com/productos/converse-de-ecocuero/'
    },
    {
        id: 2,
        name: 'Bandolera',
        description: 'Bandolera negra con tachas',
        price: 37.960,
        stock: 1,
        imgUrl: 'https://reginabags.mitiendanube.com/productos/bandolera-izzie/'
    },
    {
        id: 3,
        name: 'Riñonera',
        description: 'Riñonera con tres cierres delanteros',
        price: 31.300,
        stock: 1,
        imgUrl: 'https://reginabags.mitiendanube.com/productos/rinonera-juana/'
    }
]

async addProducts(products: Product[]): Promise<Product[]> {
    const existingProducts = await this.productRepo.find();
    const newProducts = products.filter(
        (product) => !existingProducts.some((prod) => prod.name === product.name),
    );

    return this.productRepo.save(newProducts);
}

async getProducts(){
    return this.products
}

getProductById(id: number){
    return this.products.find((product) => product.id === id)
}

createProduct(createProductDto: createProductDto){
    const newProduct = {
        id : this.products.length + 1,
        ...createProductDto
    } 
    this.products.push(newProduct)
    return newProduct.id;
}


updateProduct(id: number, productUpdate: updateProductDto){
    const product = this.getProductById(id);
    const updateProduct = {
        ...product,
        ...productUpdate,
    };
    this.products = this.products.map((product) => (product.id === id ? updateProduct : product))
    return updateProduct;
}

removeProduct(id: number){
    this.products = this.products.filter((product) => product.id !== id);
    return id
}
}