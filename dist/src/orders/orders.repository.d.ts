import { Repository } from "typeorm";
import { Order } from "./orders.entity";
import { ProductsService } from "../products/products.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UsersService } from "../users/users.service";
import { OrderResponseDto } from "./dto/response-order.dto";
import { OrderDetail } from "../orderDetail/order-detail.entity";
export declare class OrderRepository {
    private readonly orderRepository;
    private readonly orderDetailRepository;
    private readonly userService;
    private readonly productService;
    constructor(orderRepository: Repository<Order>, orderDetailRepository: Repository<OrderDetail>, userService: UsersService, productService: ProductsService);
    addOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto>;
    private calculateTotal;
    getOrder(id: string): Promise<OrderResponseDto>;
}
