import { EntityManager, QueryFailedError, Repository } from "typeorm";
import { Order } from "./orders.entity";
import { ProductsService } from "../products/products.service";
import { CreateOrderDto, ProductId } from "./dto/create-order.dto";
import { CreateOrderDetailDto } from "../orderDetail/dto/create-order-detail.dto";
import { OrderResponseDto } from "./dto/response-order.dto";
import { OrderDetail } from "../orderDetail/order-detail.entity";
import { User } from "../users/users.entity";
import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";


@Injectable()
export class OrderRepository {
    constructor(
        private readonly entityManager: EntityManager,
        private readonly productService: ProductsService
    ){}

    async addOrder(createOrderDto: CreateOrderDto): Promise<OrderResponseDto>{
        
        try{
        const {userId, products} = createOrderDto;

        const user = await this.entityManager.findOne(User,{
            where: {id: userId},
    })
    
        if (!user) {
            throw new NotFoundException(`El usuario con ID ${userId} no fue encontrado`);
        }

        const total = await this.calculateTotal(products)

        const orderEntity = await this.entityManager.save(Order,
            {
                user: user,
                date: new Date(),
            } 
            ); 
        console.log('orderEntity',orderEntity)

        const orderDetail = new CreateOrderDetailDto();
        orderDetail.price = total;
        orderDetail.products = products;
        orderDetail.order = orderEntity;


        const orderDetailEntity = await this.entityManager.save(OrderDetail, orderDetail);

        console.log(orderDetailEntity)

        return orderDetailEntity;
    } catch (error) {
        if (error instanceof QueryFailedError && error.message.includes('llave duplicada viola restricción de unicidad')) {
            throw new ConflictException('No se puede agregar el mismo producto más de una vez en la orden.');
        }
        throw error;
    }
    }

    private async calculateTotal (products: Array<ProductId>): Promise<number>{
        let total = 0;
        for(const product of products){
            const productPrice = await this.productService.buyProduct(product.id)
            console.log('productPrice',typeof productPrice)
            total += Number(productPrice);

            console.log('total',typeof total)
        }
        return total;
        
    }


    async getOrder(id: string): Promise<Order>{
        const order = await this.entityManager.findOne(Order,{
            where: { id },
            relations: ['orderDetail', 'orderDetail.products', 'orderDetail.order.user']
        });

        if (!order) {
            throw new NotFoundException('La orden no fue encontrada');
        }
        
        return order;
    }

    
}

