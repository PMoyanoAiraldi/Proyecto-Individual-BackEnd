import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Category } from '../categories/categories.entity';
import { OrderDetail } from '../orderDetail/order-detail.entity';

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 50, nullable: false })
    name: string;

    @Column('text',{nullable: false})
    description: string;

    @Column('decimal', { precision: 10, scale: 2, nullable: false})
    price: number;

    @Column('int',{nullable: false})
    stock: number;

    @Column({ type: 'text', default: 'default-image-url.jpg' })
    imgUrl: string;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @ManyToMany(() => OrderDetail, orderDetail => orderDetail.products)
    
    orderDetails: OrderDetail[];
}
