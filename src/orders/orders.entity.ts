import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { OrderDetail } from '../orderDetail/order-detail.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @Column('timestamp')
    date: Date;

    @OneToOne(() => OrderDetail, orderDetail => orderDetail.order)
    @JoinColumn()
    orderDetail: OrderDetail;
}
