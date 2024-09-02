import { CreateOrderDto } from "./dto/create-order.dto";
import { OrderRepository } from "./orders.repository";
import { OrderResponseDto } from "./dto/response-order.dto";
export declare class OrderService {
    private readonly orderRepository;
    constructor(orderRepository: OrderRepository);
    createOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto>;
    getOrder(id: string): Promise<OrderResponseDto>;
}
