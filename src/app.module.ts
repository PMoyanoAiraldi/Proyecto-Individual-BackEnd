import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { postgresDataSourceConfig } from './config/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from './categories/categories.module';
import { OrderModule } from './orders/orders.module';
import { OrderDetailModule } from './orderDetail/order-detail.module';


@Module({
    imports: [
      ConfigModule.forRoot({
      
        isGlobal: true,
        load: [ postgresDataSourceConfig]
      }),
      TypeOrmModule.forRootAsync({
        inject: [ConfigService],
        useFactory: (configService: ConfigService) =>
          configService.get('postgres')
      }),
      AuthModule, 
      ProductsModule,
      UsersModule,
      CategoriesModule,
      OrderModule,
      OrderDetailModule
    ],
  controllers: [AppController],
  providers: [AppService],


  
})



export class AppModule {}
