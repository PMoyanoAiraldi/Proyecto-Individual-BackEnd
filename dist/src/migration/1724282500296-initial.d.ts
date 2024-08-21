import { MigrationInterface, QueryRunner } from "typeorm";
export declare class Initial1724282500296 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
