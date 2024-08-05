import { Category } from '../categories/categories.entity';
import { OrderDetail } from '../orderDetail/order-detail.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: Category;
    orderDetails: OrderDetail[];
}
