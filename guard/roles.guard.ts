import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate{
    constructor (private readonly reflector : Reflector){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
            context.getHandler(), 
            context.getClass()]);
            
    if (!requiredRoles) {
        return true;//si no hay roles definidos, permite la solicitud
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Si el rol requerido es 'admin', verificamos el campo 'admin' en el usuario
    if (requiredRoles.includes('admin') && !user.admin) {
        throw new ForbiddenException('No tienes los permisos necesarios');
    }

    return true;
    
    }
}