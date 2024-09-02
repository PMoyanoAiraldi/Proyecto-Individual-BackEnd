"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadDto = void 0;
const openapi = require("@nestjs/swagger");
class FileUploadDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { fieldname: { required: true, type: () => String }, originalname: { required: true, type: () => String }, mimetype: { required: true, type: () => String }, size: { required: true, type: () => Number }, buffer: { required: true, type: () => Object } };
    }
}
exports.FileUploadDto = FileUploadDto;
//# sourceMappingURL=file-upload.dto.js.map