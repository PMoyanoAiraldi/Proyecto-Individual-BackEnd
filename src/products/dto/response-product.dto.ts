export class responseProductDto{
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;

    constructor(partial: Partial<responseProductDto>){ //significa que puede venir otras propiedades o menos de las que declaro
        const {name, description, price, stock, imgUrl} = partial;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.imgUrl = imgUrl;
    
    }
}