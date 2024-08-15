import { Repository } from "typeorm";
import { OrderDetail } from "./order-detail.entity";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
export declare class OrderDetailRepository extends Repository<OrderDetail> {
    createOrderDetail(createOrderDetail: CreateOrderDetailDto): Promise<OrderDetail>;
    findOneByOrderId(orderId: string, relations?: string[]): Promise<OrderDetail[]>;
}
