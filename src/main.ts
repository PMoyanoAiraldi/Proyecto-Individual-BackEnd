import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/logger.middleware';
import { CategorySeeder } from './categories/categories.seeder';
import { ValidationPipe } from '@nestjs/common';
//import 'reflect-metadata'; //el compilador de Js edita las entidades en tiempo real


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.use(loggerGlobal) //para utilizar mi middleware en la aplicacion de forma global")


  await app.listen(3000);
}
bootstrap();
