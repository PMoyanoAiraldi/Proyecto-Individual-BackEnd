import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { Order } from "./orders.entity";
import { CreateOrderDto } from "./dto/create-order.dto";

@Controller('orders')
export class OrderController{
    constructor(private readonly ordersService: OrderService) {}

    @Post()
        async createOrder(@Body() createOrderDto: CreateOrderDto ){
            return await this.ordersService.createOrder(createOrderDto)
        }

    @Get(':id')
    async getOrder(@Param('id') id: string){
        return await this.ordersService.getOrder((id))
    }
    
}