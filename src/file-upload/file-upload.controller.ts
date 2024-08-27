import { Controller, HttpCode, HttpStatus, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { ProductsService } from '../products/products.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploadPipe } from '../pipes/image/image-upload.pipe';
import { AuthGuard } from 'ecommerce-PMoyanoAiraldi/guard/auth/auth.guard';

@Controller('files')
export class FileUploadController {
  constructor(
    private readonly fileUploadService: FileUploadService,
    private readonly productService: ProductsService,
  ) {}

@Post('uploadImage/:productId')
@UseGuards(AuthGuard)
@HttpCode(HttpStatus.OK)
@UseInterceptors(FileInterceptor('file'))
async uploadFile(@Param('id')id: string, @UploadedFile(new ImageUploadPipe()) file: Express.Multer.File){
  return this.productService.uploadFile(file, id)
}

}
