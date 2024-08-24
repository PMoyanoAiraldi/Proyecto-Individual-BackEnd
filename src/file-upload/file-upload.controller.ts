import { Controller, HttpCode, HttpStatus, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { ProductsService } from '../products/products.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploadPipe } from '../pipes/image/image-upload.pipe';

@Controller('files')
export class FileUploadController {
  constructor(
    private readonly fileUploadService: FileUploadService,
    private readonly productService: ProductsService,
  ) {}

@Post('uploadImage/:id')
@HttpCode(HttpStatus.OK)
@UseInterceptors(FileInterceptor('file'))
async uploadFile(@Param('id')id: string, @UploadedFile(new ImageUploadPipe()) file: Express.Multer.File){
  return this.productService.uploadFile(file, id)
}

}
