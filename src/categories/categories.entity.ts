import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../products/products.entity';

@Entity()
export class Category {

    /**
     * El id de la categoría
     * @example 'e2d481f2-735e-428f-8a24-c296956dccf9'
     */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /**
     * El nombre de la categoría del producto
     * @example 'monitor'
     */
    @Column({ length: 50, nullable: false })
    name: string;

    @OneToMany(() => Product, (product) => product.category)
    products: Product[];
}
