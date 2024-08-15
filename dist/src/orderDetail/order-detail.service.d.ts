import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { OrderDetail } from "./order-detail.entity";
export declare class OrderDetailService {
    private readonly orderDetailRepository;
    createOrder(createOrderDetailDto: CreateOrderDetailDto): Promise<OrderDetail>;
    getOrderDetailsByOrderId(orderId: string, relations?: string[]): Promise<OrderDetail[]>;
}
