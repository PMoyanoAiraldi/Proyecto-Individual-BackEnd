"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerGlobal = loggerGlobal;
function loggerGlobal(req, res, next) {
    const now = new Date();
    const formattedDate = now.toLocaleString();
    console.log(`Estas ejecutando un método ${req.method} en la ruta ${req.url}, fecha y hora: ${formattedDate}`),
        next();
}
//# sourceMappingURL=logger.middleware.js.map