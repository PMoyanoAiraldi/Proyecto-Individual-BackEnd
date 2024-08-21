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
import { OrderDetailRepository } from "../orderDetail/order-detail.repository";
import { OrderRepository } from "./orders.repository";
import { UsersService } from "../users/users.service";
import { ProductsService } from "../products/products.service";
import { ProductRepository } from "../products/products.repository";
import { CategoriesRepository } from "../categories/categories.repository";


@Module({
    imports: [TypeOrmModule.forFeature([Order, OrderDetail, User, Product]),
    UsersModule,
    ProductsModule, 
    OrderDetailModule],
    providers: [OrderService,  UsersService, OrderRepository,ProductsService, ProductRepository, CategoriesRepository],
    controllers: [OrderController],
})
export class OrderModule {}
