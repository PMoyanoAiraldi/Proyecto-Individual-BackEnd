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
exports.OrderRepository = void 0;
const typeorm_1 = require("typeorm");
const orders_entity_1 = require("./orders.entity");
const products_service_1 = require("../products/products.service");
const create_order_detail_dto_1 = require("../orderDetail/dto/create-order-detail.dto");
const order_detail_entity_1 = require("../orderDetail/order-detail.entity");
const users_entity_1 = require("../users/users.entity");
const common_1 = require("@nestjs/common");
let OrderRepository = class OrderRepository {
    constructor(entityManager, productService) {
        this.entityManager = entityManager;
        this.productService = productService;
    }
    async addOrder(createOrderDto) {
        try {
            const { userId, products } = createOrderDto;
            const user = await this.entityManager.findOne(users_entity_1.User, {
                where: { id: userId },
            });
            if (!user) {
                throw new common_1.NotFoundException(`El usuario con ID ${userId} no fue encontrado`);
            }
            const total = await this.calculateTotal(products);
            const orderEntity = await this.entityManager.save(orders_entity_1.Order, {
                user: user,
                date: new Date(),
            });
            console.log('orderEntity', orderEntity);
            const orderDetail = new create_order_detail_dto_1.CreateOrderDetailDto();
            orderDetail.price = total;
            orderDetail.products = products;
            orderDetail.order = orderEntity;
            const orderDetailEntity = await this.entityManager.save(order_detail_entity_1.OrderDetail, orderDetail);
            console.log(orderDetailEntity);
            return orderDetailEntity;
        }
        catch (error) {
            if (error instanceof typeorm_1.QueryFailedError && error.message.includes('llave duplicada viola restricción de unicidad')) {
                throw new common_1.ConflictException('No se puede agregar el mismo producto más de una vez en la orden.');
            }
            throw error;
        }
    }
    async calculateTotal(products) {
        let total = 0;
        for (const product of products) {
            const productPrice = await this.productService.buyProduct(product.id);
            console.log('productPrice', typeof productPrice);
            total += Number(productPrice);
            console.log('total', typeof total);
        }
        return total;
    }
    async getOrder(id) {
        const order = await this.entityManager.findOne(orders_entity_1.Order, {
            where: { id },
            relations: ['orderDetail', 'orderDetail.products', 'orderDetail.order.user']
        });
        if (!order) {
            throw new common_1.NotFoundException('La orden no fue encontrada');
        }
        return order;
    }
};
exports.OrderRepository = OrderRepository;
exports.OrderRepository = OrderRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager,
        products_service_1.ProductsService])
], OrderRepository);
//# sourceMappingURL=orders.repository.js.map