import { UsersService } from "../users/users.service";
import { ProductsService } from "../products/products.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { OrderRepository } from "./orders.repository";
import { OrderResponseDto } from "./dto/response-order.dto";
import { OrderDetailService } from "../orderDetail/order-detail.service";
export declare class OrderService {
    private readonly orderRepository;
    private readonly userService;
    private readonly productsService;
    private readonly orderDetailService;
    constructor(orderRepository: OrderRepository, userService: UsersService, productsService: ProductsService, orderDetailService: OrderDetailService);
    createOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto>;
    getOrder(id: string): Promise<OrderResponseDto>;
}
