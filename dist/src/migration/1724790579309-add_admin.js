"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAdmin1724790579309 = void 0;
class AddAdmin1724790579309 {
    constructor() {
        this.name = 'AddAdmin1724790579309';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "admin" boolean NOT NULL DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "admin"`);
    }
}
exports.AddAdmin1724790579309 = AddAdmin1724790579309;
//# sourceMappingURL=1724790579309-add_admin.js.map