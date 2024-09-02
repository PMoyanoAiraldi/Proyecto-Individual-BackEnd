import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { AuthGuard } from "ecommerce-PMoyanoAiraldi/guard/auth.guard";
import { ApiSecurity, ApiTags } from "@nestjs/swagger";

@ApiTags('Orders')
@Controller('orders')
export class OrderController{
    constructor(private readonly ordersService: OrderService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(AuthGuard)
    @ApiSecurity('bearer')
        async createOrder(@Body() createOrderDto: CreateOrderDto ){
            return await this.ordersService.createOrder(createOrderDto)
        }

    @Get(':id')
    @UseGuards(AuthGuard)
    @ApiSecurity('bearer')
    @HttpCode(HttpStatus.OK)
    async getOrder(@Param('id', new ParseUUIDPipe()) id: string){
        const order = await this.ordersService.getOrder((id))
        if(!order){
            throw new HttpException('La orden no fue encontrada', HttpStatus.NOT_FOUND)
        }
        return order
    }
    
}