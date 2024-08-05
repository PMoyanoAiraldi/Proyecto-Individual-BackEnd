import { Order } from '../orders/orders.entity';
import { Product } from '../products/products.entity';
export declare class OrderDetail {
    id: string;
    price: number;
    order: Order;
    products: Product[];
}
