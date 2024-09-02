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
        private readonly orderRepository: OrderRepository,
    ){}

   //async createOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
    async createOrder(createOrderDto: CreateOrderDto) {
        return this.orderRepository.addOrder(createOrderDto);
    }

    async getOrder(id: string): Promise<OrderResponseDto> {
        const order = await this.orderRepository.getOrder(id);

        if ( !order.orderDetail) {
            throw new NotFoundException('El detalle de la orden no fue encontrado');
        }
        if (!order) {
            throw new NotFoundException('La orden no fue encontrada');
        }


        return new OrderResponseDto(order.orderDetail);
    }
}
    
