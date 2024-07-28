import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Category } from '../categories/categories.entity';
import { OrderDetail } from '../orderDetail/order-detail.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 50 })
    name: string;

    @Column('text')
    description: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column('int')
    stock: number;

    @Column({ type: 'text', default: 'default-image-url.jpg' })
    imgUrl: string;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @ManyToMany(() => OrderDetail, orderDetail => orderDetail.products)
    @JoinTable()
    orderDetails: OrderDetail[];
}
