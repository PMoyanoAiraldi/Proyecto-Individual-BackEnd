import { Controller} from "@nestjs/common";
import { OrderDetailService } from "./order-detail.service";
import { ApiTags } from "@nestjs/swagger";


@ApiTags('OrderDetail')
@Controller('orderdetail')
export class OrderDetailController{
    constructor(private readonly orderDetailService: OrderDetailService) {}
}