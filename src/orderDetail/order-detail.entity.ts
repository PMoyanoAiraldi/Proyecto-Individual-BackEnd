import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinColumn } from 'typeorm';
import { Order } from '../orders/orders.entity';
import { Product } from '../products/products.entity';

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    price: number;

    @OneToOne(() => Order, (order) => order.orderDetail)
    @JoinColumn()
    order: Order;

    @ManyToMany(() => Product, (product) => product.orderDetails)
    products: Product[];
}
