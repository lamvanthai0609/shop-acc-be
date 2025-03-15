export interface AccountGeneralInfo {
    id: number;
    images: string[];
    price: number;
    discount: number;
    type: string;
    status: 'Còn hàng' | 'Đã bán';
    categoryId: number | null;
    created: Date;
    updated: Date;
}
