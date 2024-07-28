import { DataSource } from "typeorm";
export declare const postgresDataSourceConfig: (() => {
    type: string;
    database: string;
    host: string;
    port: number;
    username: string;
    password: string;
    synchronize: boolean;
    logging: boolean;
    entities: string[];
    migrations: any[];
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    database: string;
    host: string;
    port: number;
    username: string;
    password: string;
    synchronize: boolean;
    logging: boolean;
    entities: string[];
    migrations: any[];
}>;
export declare const connectionSource: DataSource;
