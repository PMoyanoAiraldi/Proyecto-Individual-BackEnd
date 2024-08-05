import { Module } from "@nestjs/common";
import { OrderService } from "./orders.service";
import { OrderController } from "./orders.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./orders.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Order])],
    providers: [OrderService],
    controllers: [OrderController],
})
export class OrderModule {}