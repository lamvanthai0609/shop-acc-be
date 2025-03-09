export interface Transaction {
    id: number;
    userId: number;
    type: 'Dịch Vụ' | 'Mua Account';
    accountId: number | null;
    serviceId: number | null;
    amount: number;
    finalBalance: number;
    created: Date;
    updated: Date;
}
