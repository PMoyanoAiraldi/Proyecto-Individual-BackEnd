import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { Order } from "./orders.entity";
import { CreateOrderDto } from "./dto/create-order.dto";
import { IsUUID } from "class-validator";

@Controller('orders')
export class OrderController{
    constructor(private readonly ordersService: OrderService) {}

    @Post()
        async createOrder(@Body() createOrderDto: CreateOrderDto ){
            return await this.ordersService.createOrder(createOrderDto)
        }

    @Get(':id')
    async getOrder(@Param('id', new ParseUUIDPipe()) id: string){
        const order = await this.ordersService.getOrder((id))
        if(!IsUUID(4, { each: true})){
            throw new HttpException('UUID inválido', HttpStatus.BAD_REQUEST)
        }
        if(!order){
            throw new HttpException('La orden no fue encontrada', HttpStatus.NOT_FOUND)
        }
        return order
    }
    
}