export interface Recharge {
    id: number;
    userId: number;
    denomination: number;
    networkTyp: 'Viettel' | 'Mobifone' | 'Vinaphone';
    oldBalance: number;
    newBalance: number;
    method: 'ATM' | 'CARD';
    status: 'Thành công' | 'Đang chờ';
    created: Date;
    updated: Date;
}
