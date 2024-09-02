export class CreateOrderDetailDto{
    /**
     * El precio del producto
     * @example '250.50'
     */
    price: number;

    /**
     * La orden creada por el usuario
     * 
     */
    order: object;

    /**
     * Los productos elegidos por el usuario
     */
    products: Array<object>

}