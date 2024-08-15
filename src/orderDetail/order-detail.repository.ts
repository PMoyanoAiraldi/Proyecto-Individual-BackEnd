import { Repository } from "typeorm";
import { OrderDetail } from "./order-detail.entity";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";

export class OrderDetailRepository extends Repository<OrderDetail>{
    async createOrderDetail(createOrderDetail: CreateOrderDetailDto): Promise<OrderDetail>{
        const orderDetail = this.create(createOrderDetail)
        return this.save(orderDetail)
    }

    async findOneByOrderId(orderId: string, relations: string[] = []): Promise<OrderDetail[]>{
        return await this.find({
            where: { order: {id: orderId}},
            relations: relations
        })
    }
}