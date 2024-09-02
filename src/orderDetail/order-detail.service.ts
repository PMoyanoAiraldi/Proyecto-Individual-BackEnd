import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderDetailRepository } from "./order-detail.repository";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { OrderDetail } from "./order-detail.entity";


@Injectable()
export class OrderDetailService{
    @InjectRepository(OrderDetailRepository)
    private readonly orderDetailRepository: OrderDetailRepository

    async createOrder(createOrderDetailDto: CreateOrderDetailDto): Promise<OrderDetail>{
        return this.orderDetailRepository.createOrderDetail(createOrderDetailDto)
    }

    async getOrderDetailsByOrderId(orderId: string, relations: string[] = []): Promise<OrderDetail[]> {
        return this.orderDetailRepository.findOneByOrderId(orderId, relations);
    }
}