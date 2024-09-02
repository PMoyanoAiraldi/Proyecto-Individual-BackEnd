import { Controller, HttpCode, HttpStatus, Param, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploadPipe } from '../pipes/image/image-upload.pipe';
import { AuthGuard } from 'ecommerce-PMoyanoAiraldi/guard/auth.guard';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileCreateDto } from './dto/file-create.dto';


@ApiTags('Files')
@Controller('files')
export class FileUploadController {
  constructor( private readonly fileUploadService: FileUploadService ) {}

@Post('uploadImage/:productId')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@HttpCode(HttpStatus.OK)
@UseInterceptors(FileInterceptor('file'))
@ApiConsumes('multipart/form-data')
@ApiBody({
  description: 'File upload',
  type: FileCreateDto, 
})
async uploadFile(
  @Param('productId') productId: string, 
  @UploadedFile(new ImageUploadPipe()) file: Express.Multer.File
){
  return this.fileUploadService.uploadFile(file, productId)
}

}
