export interface Recharge {
    id: number;
    userId: number;
    denomination: number;
    networkType: RechargeNetworkType;
    seriNumber: string;
    cardCode: string;
    oldBalance: number;
    newBalance: number;
    method: RechargeMethod;
    status: RechargeStatus;
    created: Date;
    updated: Date;
}

export enum RechargeMethod {
    ATM = 'ATM',
    CARD = 'CARD',
}

export enum RechargeStatus {
    SUCCESS = 'Thành công',
    PENDING = 'Đang chờ',
    FAILED = 'Thất bại',
}

export enum RechargeNetworkType {
    VIETTEL = 'Viettel',
    MOBIFONE = 'Mobifone',
    VINAPHONE = 'Vinaphone',
}
