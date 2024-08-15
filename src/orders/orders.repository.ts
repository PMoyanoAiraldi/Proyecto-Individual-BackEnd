import { Repository } from "typeorm";
import { Order } from "./orders.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { OrderDetailRepository } from "../orderDetail/order-detail.repository";
import { ProductsService } from "../products/products.service";
import { CreateOrderDto, ProductId } from "./dto/create-order.dto";
import { UsersService } from "../users/users.service";
import { CreateOrderDetailDto } from "../orderDetail/dto/create-order-detail.dto";
import { OrderResponseDto } from "./dto/response-order.dto";
import { OrderDetail } from "../orderDetail/order-detail.entity";

export class OrderRepository {
    constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
    private readonly userService: UsersService,
    private readonly productService: ProductsService
    ){ }

    async addOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto>{
        const {userId, products} = createOrderDto;
        const user = await this.userService.getUserById(userId)

        const order = this.orderRepository.create({ //creamos la orden
            user: user,
            date: new Date(),
        });

        const orderEntity = await this.orderRepository.save(order); //guardamos la orden orderEntity
        const total = await this.calculateTotal(products)

        const orderDetail = new CreateOrderDetailDto();//creamos y guardamos el detalle de la orden
        orderDetail.price = total;
        orderDetail.products = products;
        orderDetail.order = orderEntity;

        const orderDetailEntity = this.orderDetailRepository.create(orderDetail);
        await this.orderDetailRepository.save(orderDetail);

        return new OrderResponseDto(orderDetailEntity);
    }

    private async calculateTotal (products: Array<ProductId>): Promise<number>{
        let total = 0;
        for(const product of products){
            total += await this.productService.buyProduct(product.id)
        }
        return total;
    }


    async getOrder(id: string): Promise<OrderResponseDto>{
        const order = await this.orderRepository.findOne({
            where: { id },
            relations: ['orderDetail', 'orderDetail.products']
        });

        if (!order) {
            throw new Error('La orden no fue encontrada');
        }

        const orderDetail = await this.orderDetailRepository.findOne({
            where: { order: { id } },
            relations: ['products', 'order']
        });

        if (!orderDetail) {
            throw new Error('Detalles de la orden no fueron encontrados');
        }

        return new OrderResponseDto(orderDetail);
    }
}