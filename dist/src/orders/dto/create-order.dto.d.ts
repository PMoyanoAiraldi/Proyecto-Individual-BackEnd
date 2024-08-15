export interface ProductId {
    id: string;
}
export declare class CreateOrderDto {
    userId: string;
    products: Array<ProductId>;
}
