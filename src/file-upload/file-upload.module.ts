import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { CloudinaryService } from '../service/cloudinary-service/cloudinary/cloudinary.service';
import { FileUploadRepository } from './file-upload.repository';


@Module({
  providers: [FileUploadService,FileUploadRepository, CloudinaryService],
  controllers: [FileUploadController],
  exports: [FileUploadService]
})

export class FileUploadModule {}
