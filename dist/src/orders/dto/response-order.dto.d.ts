import { OrderDetail } from "ecommerce-PMoyanoAiraldi/src/orderDetail/order-detail.entity";
export declare class OrderResponseDto {
    id: string;
    price: number;
    products: object[];
    order: {
        id: string;
        date: Date;
        user: {
            id: string;
        };
    };
    constructor(orderDetail: OrderDetail);
}
