import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middlewares/logger.middleware';
import { ValidationPipe } from '@nestjs/common';
import { auth } from 'express-openid-connect';
import { auth0Config } from './config/auth0-config';
//import 'reflect-metadata'; //el compilador de Js edita las entidades en tiempo real


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.use(loggerGlobal) //para utilizar mi middleware en la aplicacion de forma global")
  app.use(auth({
    ...auth0Config
  }))

  await app.listen(3000);
}
bootstrap();
