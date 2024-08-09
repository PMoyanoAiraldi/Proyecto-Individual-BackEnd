import { Module } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { OrderController } from "./orders.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./orders.entity";
import { OrderDetail } from "../orderDetail/order-detail.entity";
import { Product } from "../products/products.entity";
import { User } from "../users/users.entity";
import { UsersModule } from "../users/users.module";
import { ProductsModule } from "../products/products.module";
import { OrderDetailModule } from "../orderDetail/order-detail.module";


@Module({
    imports: [TypeOrmModule.forFeature([Order, OrderDetail, User, Product]),
    UsersModule,
    ProductsModule, 
    OrderDetailModule],
    providers: [OrderService],
    controllers: [OrderController],
})
export class OrderModule {}