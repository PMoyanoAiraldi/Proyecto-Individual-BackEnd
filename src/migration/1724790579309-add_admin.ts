import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAdmin1724790579309 implements MigrationInterface {
    name = 'AddAdmin1724790579309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "admin"`);
    }

}
