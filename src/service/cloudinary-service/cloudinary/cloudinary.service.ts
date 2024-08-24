import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { v2 as cloudinary, UploadApiOptions} from 'cloudinary';


@Injectable()
export class CloudinaryService {
    constructor(){
        dotenv.config({
            path: '.env.development'
        });
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
    }

    async uploadFile(buffer: Buffer, originalName?: string): Promise<string>{
        const options: UploadApiOptions = {
            folder: 'upload', //nombre de la carpeta que se va a subir el archivo, si no esta creada la crea automaticamente
            public_id: originalName,
            resource_type: 'auto' //si es png o jpg, que lo deduzca automaticamente
        }

        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                options,
                (error, result) => {
                    error ? reject(error) : resolve(result.secure_url)
                },
            );
            stream.write(buffer);
            stream.end();
        })
    }


}
