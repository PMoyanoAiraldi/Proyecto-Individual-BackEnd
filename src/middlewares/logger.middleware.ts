import { Request, Response, NextFunction } from "express";



export function loggerGlobal(req: Request, res: Response, next: NextFunction){ 
    const now = new Date();
    const formattedDate = now.toLocaleString();
    console.log(`Estas ejecutando un método ${req.method} en la ruta ${req.url}, fecha y hora: ${formattedDate}`),
    next();
}