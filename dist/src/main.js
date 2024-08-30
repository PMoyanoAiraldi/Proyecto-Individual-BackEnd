"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(logger_middleware_1.loggerGlobal);
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Ecommerce de productos tecnológicos')
        .setDescription('Esta API permite la creación,  actualización y eliminación de productos como teclados, smartphones, mouses, y monitores, así como la gestión de usuarios, órdenes de compra, y manejo de inventario. Ideal para desarrolladores que buscan integrar funcionalidades de comercio electrónico en sus aplicaciones.')
        .setVersion('1.0.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map