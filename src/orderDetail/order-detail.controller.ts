import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { OrderDetailService } from "./order-detail.service";
import { IsUUID } from "class-validator";
import { ApiTags } from "@nestjs/swagger";


@ApiTags('OrderDetail')
@Controller('orderdetail')
export class OrderDetailController{
    constructor(private readonly orderDetailService: OrderDetailService) {}

    @Post()
    async createOrderDetail(@Body() createOrderDetailDto: CreateOrderDetailDto ){
        return await this.orderDetailService.createOrder(createOrderDetailDto)
    }

    @Get(':id')
    async getOrder(@Param('id', new ParseUUIDPipe()) id: string){
    const orderDetail = await this.orderDetailService.getOrderDetailsByOrderId((id))
    if(!IsUUID(4, { each: true})){
        throw new HttpException('UUID inválido', HttpStatus.BAD_REQUEST)
    }
    if(!orderDetail){
        throw new HttpException('El detalle de la orden no fue encontrado', HttpStatus.NOT_FOUND)
    }
    return orderDetail
}
}