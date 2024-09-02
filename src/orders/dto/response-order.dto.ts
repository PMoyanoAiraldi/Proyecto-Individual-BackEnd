import { IsNumber, IsString } from "class-validator";
import { OrderDetail } from "ecommerce-PMoyanoAiraldi/src/orderDetail/order-detail.entity";

export class OrderResponseDto{
    /**
     * El id de la orden
     * @example 'e2d481f2-735e-428f-8a24-c296956dccf9'
     */
    @IsString()
    id: string;

    /**
    * El precio del producto
    * @example '250.50'
    */
    @IsNumber()
    price: number;

    products: Object[];

    order: {
        id: string,
        date: Date,
        user: {
            id: string;
        };
    };

    constructor(orderDetail: OrderDetail){  //en el constructor vamos mapeando los datos de la orden
        this.id = orderDetail.id;
        this.price = orderDetail.price;
        this.products = orderDetail.products || [];
        this.order = orderDetail.order

        if(orderDetail.order){
            this.order = {
                id: orderDetail.order.id,
                date: orderDetail.order.date,
                user: {
                    id: orderDetail.order.user.id
                },
        }
    }else {
        this.order = null; 
    }
    }
}