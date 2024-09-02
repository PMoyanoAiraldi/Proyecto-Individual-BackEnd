import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinColumn } from 'typeorm';
import { Order } from '../orders/orders.entity';
import { Product } from '../products/products.entity';

@Entity()
export class OrderDetail {

    /**
     * El id del detalle de la orden
     * @example 'e2d481f2-735e-428f-8a24-c296956dccf9'
     */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /**
    * El precio del producto
    * @example '250.50'
    */
    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    price: number;

    @OneToOne(() => Order, (order) => order.orderDetail)
    @JoinColumn()
    order: Order;

    @ManyToMany(() => Product, (product) => product.orderDetails)
    products: Product[];
}
