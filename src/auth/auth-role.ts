import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean {
        throw new Error("Method not implemented.");
    }
    
}