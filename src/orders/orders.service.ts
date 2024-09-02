import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateOrderDto, ProductId } from "./dto/create-order.dto";
import { OrderRepository } from "./orders.repository";
import { OrderResponseDto } from "./dto/response-order.dto";

@Injectable()
export class OrderService {
    constructor(
        private readonly orderRepository: OrderRepository,
    ){}

    async createOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto> {
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
    
