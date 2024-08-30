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
exports.FileUploadRepository = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_service_1 = require("../service/cloudinary-service/cloudinary/cloudinary.service");
const products_repository_1 = require("../products/products.repository");
let FileUploadRepository = class FileUploadRepository {
    constructor(cloudinaryService, productsRepository) {
        this.cloudinaryService = cloudinaryService;
        this.productsRepository = productsRepository;
    }
    async uploadFile(file, productId) {
        const fileUploadDto = {
            fieldname: file.fieldname,
            buffer: file.buffer,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size
        };
        const url = await this.cloudinaryService.uploadFile(fileUploadDto.buffer, fileUploadDto.originalname);
        await this.productsRepository.updateProduct(productId, { imgUrl: url });
        return { imgUrl: url };
    }
};
exports.FileUploadRepository = FileUploadRepository;
exports.FileUploadRepository = FileUploadRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cloudinary_service_1.CloudinaryService,
        products_repository_1.ProductRepository])
], FileUploadRepository);
//# sourceMappingURL=file-upload.repository.js.map