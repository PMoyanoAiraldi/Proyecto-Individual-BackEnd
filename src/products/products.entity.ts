import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Category } from '../categories/categories.entity';
import { OrderDetail } from '../orderDetail/order-detail.entity';

@Entity()
export class Product {

    /**
     * El id del producto 
     * @example 'e2d481f2-735e-428f-8a24-c296956dccf9'
     */
    @PrimaryGeneratedColumn('uuid')
    id: string;


    /**
     * El nombre del producto
     * @example 'Samsung Galaxy'
     */
    @Column({ length: 50, nullable: false })
    name: string;

    /**
     * La descripción del producto
     * @example 'The best smartphone in the world'
     */
    @Column('text',{nullable: false})
    description: string;

    /**
    * El precio del producto
    * @example '250.50'
    */
    @Column('decimal', { precision: 10, scale: 2, nullable: false})
    price: number;

    /**
    * La cantidad disponible de ese producto
    * @example '15'
    */
    @Column('int',{nullable: false})
    stock: number;

    /**
    * La url de la imagen del producto
    * @example 'default-image-url.jpg'
    */
    @Column({ default: 'default-image-url.jpg' })
    imgUrl: string;

    
    @ManyToOne(() => Category, (category) => category.products)
    category: Category;

    @ManyToMany(() => OrderDetail, (orderDetail) => orderDetail.products)  
    @JoinTable()
    orderDetails: OrderDetail[];
}
