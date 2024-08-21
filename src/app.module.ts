import { Module, OnModuleInit } from '@nestjs/common';
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
import { ProductSeeder } from './products/products.seeder';
import { CategorySeeder } from './categories/categories.seeder';
import { ProductRepository } from './products/products.repository';
import { CategoriesRepository } from './categories/categories.repository';


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
      OrderDetailModule,
    ],
  controllers: [AppController],
  providers: [AppService, ProductSeeder, CategorySeeder, CategoriesRepository, ProductRepository],
  exports: [ProductSeeder, CategorySeeder]
})

export class AppModule implements OnModuleInit {
  constructor(
    private readonly productSeeder: ProductSeeder,
    private readonly categorySeeder: CategorySeeder,
  ) {}

  async onModuleInit() {
    await this.categorySeeder.seedCategory();
    await this.productSeeder.seedProducts();
  }
}

