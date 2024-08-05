import { User } from '../users/users.entity';
import { OrderDetail } from '../orderDetail/order-detail.entity';
export declare class Order {
    id: string;
    user: User;
    date: Date;
    orderDetail: OrderDetail;
}
