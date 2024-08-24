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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const categories_seeder_1 = require("./categories.seeder");
const auth_guard_1 = require("../../guard/auth/auth.guard");
const class_validator_1 = require("class-validator");
let CategoriesController = class CategoriesController {
    constructor(categoriesService, categoriesSeeder) {
        this.categoriesService = categoriesService;
        this.categoriesSeeder = categoriesSeeder;
    }
    async seedCategories(categories) {
        try {
            await this.categoriesSeeder.seedCategory(categories);
            return { message: 'Categories seeded successfully' };
        }
        catch (error) {
            return { message: 'Error seeding categories', error };
        }
    }
    async getUser(id) {
        const category = await this.categoriesService.findOneById(id);
        if (!(0, class_validator_1.IsUUID)(4, { each: true })) {
            throw new common_1.HttpException('UUID inválido', common_1.HttpStatus.BAD_REQUEST);
        }
        if (!category) {
            throw new common_1.HttpException('La categoria no fue encontrada', common_1.HttpStatus.NOT_FOUND);
        }
        return category;
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, common_1.Post)('seeder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "seedCategories", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getUser", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService,
        categories_seeder_1.CategorySeeder])
], CategoriesController);
//# sourceMappingURL=categories.controller.js.map