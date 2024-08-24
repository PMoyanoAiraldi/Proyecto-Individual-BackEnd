import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { OrderDetailService } from "./order-detail.service";
export declare class OrderDetailController {
    private readonly orderDetailService;
    constructor(orderDetailService: OrderDetailService);
    createOrderDetail(createOrderDetailDto: CreateOrderDetailDto): Promise<import("./order-detail.entity").OrderDetail>;
    getOrder(id: string): Promise<import("./order-detail.entity").OrderDetail[]>;
}
