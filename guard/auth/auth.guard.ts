import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest()
    const authHeader = request.header('Authorization')

    if(!authHeader){
      throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED)
    }

    const authFormat = authHeader.split(' ') //Divide el valor del encabezado Authorization en un array usando el espacio 

   //authFormat: Después de la división, authFormat[0] debería ser "Basic" y authFormat[1] debería ser la cadena codificada en base64 
   //de las credenciales
   //Por ejemplo:
  //  Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
  // authHeader = "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
  // authFormat = ["Basic", "dXNlcm5hbWU6cGFzc3dvcmQ="]

    console.log(authHeader)
    console.log(authFormat)
  
    const credentialsBase64 = authFormat[1]
    const decodeCredentials = Buffer.from(credentialsBase64, 'base64').toString('utf-8');
//  Buffer.from(credentialsBase64, 'base64'): Crea un buffer a partir de la cadena base64.
// .toString('utf-8'): Decodifica el buffer a una cadena en formato UTF-8.
// decodeCredentials: Ahora contiene la cadena decodificada, por ejemplo, "username:password".
    console.log(decodeCredentials)

    const [username, pasword] = decodeCredentials.split(':')
    console.log(username, pasword)
    return true;
  }
}
