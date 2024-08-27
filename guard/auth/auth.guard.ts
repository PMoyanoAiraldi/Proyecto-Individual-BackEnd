import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ){}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>{
    const request: Request = context.switchToHttp().getRequest() //convierte el contexto en un contexto HTTP para acceder a los detalles de la solicitud
    const token = this.extractTokenFromHeader(request)

    if(!token){
      throw new UnauthorizedException('El token no fue encontrado')
    }

    try{
      const payload = await this.jwtService.verifyAsync(token, {//verificamos que el token sea valido, la libreria lo hace internamente
        secret: this.configService.get<string>('JWT_SECRET') //obtenemos la contraseña que creamos para aue el servicio puedavalidar
      });
      
      request['user'] = payload
      payload.iat = new Date(payload.iat * 1000)
      payload.exp = new Date(payload.exp * 1000)
      console.log('Payload', payload) 
    }catch{
      throw new UnauthorizedException('Token invalido')
    }


    return true
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined
  }
}
