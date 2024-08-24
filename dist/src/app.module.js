"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./auth/auth.module");
const products_module_1 = require("./products/products.module");
const users_module_1 = require("./users/users.module");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const config_1 = require("@nestjs/config");
const data_source_1 = require("./config/data-source");
const typeorm_1 = require("@nestjs/typeorm");
const categories_module_1 = require("./categories/categories.module");
const orders_module_1 = require("./orders/orders.module");
const order_detail_module_1 = require("./orderDetail/order-detail.module");
const products_seeder_1 = require("./products/products.seeder");
const categories_seeder_1 = require("./categories/categories.seeder");
const products_repository_1 = require("./products/products.repository");
const categories_repository_1 = require("./categories/categories.repository");
const cloudinary_service_1 = require("./service/cloudinary-service/cloudinary/cloudinary.service");
const file_upload_controller_1 = require("./file-upload/file-upload.controller");
const file_upload_service_1 = require("./file-upload/file-upload.service");
const file_upload_repository_1 = require("./file-upload/file-upload.repository");
let AppModule = class AppModule {
    constructor(productSeeder, categorySeeder) {
        this.productSeeder = productSeeder;
        this.categorySeeder = categorySeeder;
    }
    async onModuleInit() {
        await this.categorySeeder.seedCategory();
        await this.productSeeder.seedProducts();
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [data_source_1.postgresDataSourceConfig]
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get('postgres')
            }),
            auth_module_1.AuthModule,
            products_module_1.ProductsModule,
            users_module_1.UsersModule,
            categories_module_1.CategoriesModule,
            orders_module_1.OrderModule,
            order_detail_module_1.OrderDetailModule,
        ],
        controllers: [app_controller_1.AppController, file_upload_controller_1.FileUploadController],
        providers: [app_service_1.AppService, products_seeder_1.ProductSeeder, categories_seeder_1.CategorySeeder, categories_repository_1.CategoriesRepository, products_repository_1.ProductRepository, cloudinary_service_1.CloudinaryService, file_upload_service_1.FileUploadService, file_upload_repository_1.FileUploadRepository],
        exports: [products_seeder_1.ProductSeeder, categories_seeder_1.CategorySeeder]
    }),
    __metadata("design:paramtypes", [products_seeder_1.ProductSeeder,
        categories_seeder_1.CategorySeeder])
], AppModule);
//# sourceMappingURL=app.module.js.map