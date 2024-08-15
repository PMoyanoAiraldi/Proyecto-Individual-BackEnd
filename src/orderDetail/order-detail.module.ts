import { Module } from "@nestjs/common";
import { OrderDetailService } from "./order-detail.service";
import { OrderDetailController } from "./order-detail.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderDetail } from "./order-detail.entity";
import { OrderDetailRepository } from "./order-detail.repository";

@Module({
    imports: [TypeOrmModule.forFeature([OrderDetail, OrderDetailRepository])],
    providers: [OrderDetailService],
    controllers: [OrderDetailController],
    exports: [OrderDetailService]
})
export class OrderDetailModule {}