import { Entity, Column,PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Order } from "../orders/orders.entity";

import { v4 as uuid} from 'uuid'

@Entity({
    name: 'users'
})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({length: 50, nullable: false})
    name: string;

    @Column({ length: 50, unique: true, nullable: false })
    email: string;
    
    @Column({ nullable: false })
    password: string;

    @Column({ type: 'int', nullable: true })
    phone: number;

    @Column({ length: 50, nullable: true })
    country: string;

    @Column({ nullable: true })
    address: string;

    @Column({ length: 50, nullable: true })
    city: string;

    @Column({default: false})
    admin: boolean

    @OneToMany(() => Order, order => order.user)
    orders: Order[];

}