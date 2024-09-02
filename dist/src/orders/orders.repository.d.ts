import { EntityManager } from "typeorm";
import { Order } from "./orders.entity";
import { ProductsService } from "../products/products.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { OrderResponseDto } from "./dto/response-order.dto";
export declare class OrderRepository {
    private readonly entityManager;
    private readonly productService;
    constructor(entityManager: EntityManager, productService: ProductsService);
    addOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto>;
    private calculateTotal;
    getOrder(id: string): Promise<Order>;
}
