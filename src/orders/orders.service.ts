import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UsersService } from "../users/users.service";
import { Order } from "./orders.entity";
import { ProductsService } from "../products/products.service";
import { CreateOrderDto } from "./dto/create-order.dto";

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        private readonly userService: UsersService,
        private readonly productsService: ProductsService,
        private readonly orderDetailService: OrderService
    ){}

    async createOrder(createOrderDto: CreateOrderDto){
        const {userId, products} = createOrderDto;
        const user = await this.userService.findOne(userId)

        const order = {
            user: user,
            date: new Date(),
        };

        const orderEntity = await this.orderRepository.save(
            this.orderRepository.create(order)
        )
    }
}