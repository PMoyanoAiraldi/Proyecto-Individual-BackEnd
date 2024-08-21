import { OrderService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
export declare class OrderController {
    private readonly ordersService;
    constructor(ordersService: OrderService);
    createOrder(createOrderDto: CreateOrderDto): Promise<import("./dto/response-order.dto").OrderResponseDto>;
    getOrder(id: string): Promise<import("./dto/response-order.dto").OrderResponseDto>;
}
