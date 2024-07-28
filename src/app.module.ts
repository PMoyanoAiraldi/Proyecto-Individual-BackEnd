import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { postgresDataSourceConfig } from './config/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';


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
    UsersModule],
  controllers: [AppController],
  providers: [AppService],


  
})



export class AppModule {}
