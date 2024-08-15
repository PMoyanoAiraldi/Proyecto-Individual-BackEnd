"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailRepository = void 0;
const typeorm_1 = require("typeorm");
class OrderDetailRepository extends typeorm_1.Repository {
    async createOrderDetail(createOrderDetail) {
        const orderDetail = this.create(createOrderDetail);
        return this.save(orderDetail);
    }
    async findOneByOrderId(orderId, relations = []) {
        return await this.find({
            where: { order: { id: orderId } },
            relations: relations
        });
    }
}
exports.OrderDetailRepository = OrderDetailRepository;
//# sourceMappingURL=order-detail.repository.js.map