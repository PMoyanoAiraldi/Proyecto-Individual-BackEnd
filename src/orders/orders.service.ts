import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsersService } from "../users/users.service";
import { Order } from "./orders.entity";
import { ProductsService } from "../products/products.service";
import { CreateOrderDto, ProductId } from "./dto/create-order.dto";
import { OrderRepository } from "./orders.repository";
import { CreateOrderDetailDto } from "../orderDetail/dto/create-order-detail.dto";
import { OrderResponseDto } from "./dto/response-order.dto";
import { OrderDetailService } from "../orderDetail/order-detail.service";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderRepository)
        private readonly orderRepository: OrderRepository,
        private readonly userService: UsersService,
        private readonly productsService: ProductsService,
        private readonly orderDetailService: OrderDetailService,
    ){}

    createOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
        return this.orderRepository.addOrder(createOrderDto);
    }

    getOrder(id: string) {
        try {
            const orderDetail =  this.orderRepository.getOrder(id);
            return orderDetail;
        } catch (error) {
          // Maneja el error y lanza una excepción adecuada
            throw new NotFoundException(error.message);
        }
    }

    
}