import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { Order } from "./orders.entity";
import { CreateOrderDto } from "./dto/create-order.dto";
import { IsUUID } from "class-validator";
import { AuthGuard } from "ecommerce-PMoyanoAiraldi/guard/auth.guard";

@Controller('orders')
export class OrderController{
    constructor(private readonly ordersService: OrderService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(AuthGuard)
        async createOrder(@Body() createOrderDto: CreateOrderDto ){
            return await this.ordersService.createOrder(createOrderDto)
        }

    @Get(':id')
    @UseGuards(AuthGuard)
    @HttpCode(HttpStatus.OK)
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