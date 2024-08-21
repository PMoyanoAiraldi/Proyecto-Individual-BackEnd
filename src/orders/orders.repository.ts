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
import { User } from "../users/users.entity";
import { NotFoundException } from "@nestjs/common";

export class OrderRepository {
    constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly productService: ProductsService
    ){ }

    async addOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto>{
        const {userId, products} = createOrderDto;

        const user = await this.userRepository.findOne({// Busca el usuario por ID incluyendo las órdenes ya realizadas
            where: {id: userId},
            relations: ['orders'], // Incluye las órdenes del usuario
        })

        if (!user) {
            throw new Error(`El usuario con ID ${userId} no fue encontrado`);
        }

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

        const orderDetailEntity = await this.orderDetailRepository.save(orderDetail);

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
        const order = await this.orderRepository.findOne({//obtener la orden con sus detalles, productos y usuario relacionados
            where: { id },
            relations: ['orderDetail', 'orderDetail.products', 'user']
        });

        if (!order) {
            throw new NotFoundException('La orden no fue encontrada');
        }

        return new OrderResponseDto(order.orderDetail);
    }
}