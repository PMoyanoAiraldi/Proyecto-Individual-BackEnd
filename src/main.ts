import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/logger.middleware';
import { ValidationPipe } from '@nestjs/common';
import { auth } from 'express-openid-connect';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

//import 'reflect-metadata'; //el compilador de Js edita las entidades en tiempo real


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.use(loggerGlobal) //para utilizar mi middleware en la aplicacion de forma global")
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Ecommerce de productos tecnológicos')
    .setDescription('Esta API permite la creación,  actualización y eliminación de productos como teclados, smartphones, mouses, y monitores, así como la gestión de usuarios, órdenes de compra, y manejo de inventario. Ideal para desarrolladores que buscan integrar funcionalidades de comercio electrónico en sus aplicaciones.')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, document)

  await app.listen(3000);
}
bootstrap();
