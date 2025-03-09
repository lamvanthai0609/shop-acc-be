export interface AccountGeneralInfo {
    id: number;
    name: string;
    priceAtm: number;
    priceCard: number;
    discount: number;
    username: string;
    type: string;
    status: 'Còn hàng' | 'Đã bán';
    categoryId: number | null;
    created: Date;
    updated: Date;
}
