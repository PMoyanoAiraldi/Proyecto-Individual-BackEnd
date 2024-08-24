"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
const orders_controller_1 = require("./orders.controller");
const typeorm_1 = require("@nestjs/typeorm");
const orders_entity_1 = require("./orders.entity");
const order_detail_entity_1 = require("../orderDetail/order-detail.entity");
const products_entity_1 = require("../products/products.entity");
const users_entity_1 = require("../users/users.entity");
const users_module_1 = require("../users/users.module");
const products_module_1 = require("../products/products.module");
const order_detail_module_1 = require("../orderDetail/order-detail.module");
const orders_repository_1 = require("./orders.repository");
const users_service_1 = require("../users/users.service");
const products_service_1 = require("../products/products.service");
const products_repository_1 = require("../products/products.repository");
const categories_repository_1 = require("../categories/categories.repository");
const file_upload_repository_1 = require("../file-upload/file-upload.repository");
const cloudinary_service_1 = require("../service/cloudinary-service/cloudinary/cloudinary.service");
let OrderModule = class OrderModule {
};
exports.OrderModule = OrderModule;
exports.OrderModule = OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([orders_entity_1.Order, order_detail_entity_1.OrderDetail, users_entity_1.User, products_entity_1.Product]),
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            order_detail_module_1.OrderDetailModule],
        providers: [orders_service_1.OrderService, users_service_1.UsersService, orders_repository_1.OrderRepository, products_service_1.ProductsService, products_repository_1.ProductRepository, categories_repository_1.CategoriesRepository, file_upload_repository_1.FileUploadRepository, cloudinary_service_1.CloudinaryService],
        controllers: [orders_controller_1.OrderController],
    })
], OrderModule);
//# sourceMappingURL=orders.module.js.map