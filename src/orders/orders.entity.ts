import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { OrderDetail } from '../orderDetail/order-detail.entity';

@Entity()
export class Order {

    /**
     * El id de la orden
     * @example 'e2d481f2-735e-428f-8a24-c296956dccf9'
     */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    /**
     * La fecha de creación de la orden
     * 
     */
    @Column()
    date: Date;

    @OneToOne(() => OrderDetail, (orderDetail) => orderDetail.order)
    orderDetail: OrderDetail;
    
}
