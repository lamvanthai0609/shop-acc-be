export enum Table {
    USER = 'users', // người dùng
    CATEGORY = 'categories', // thể loại
    ACCOUNT_GENERAL_INFORMATION = 'account_general_information', // thông tin chung account
    ACCOUNT_SPECIFIC_INFORMATION = 'account_specific_information', // thông tin cụ thể account
    IMAGE = 'images', //ảnh
    RECHARGE = 'recharges', // nạp tiền
    TRANSACTION = 'transactions', // giao dịch
    SERVICE = 'services', // dịch vụ
}

export enum AccountStatus {
    IN_STOCK = 'Còn hàng',
    OUT_OF_STOCK = 'Đã bán',
}

export enum RechargesMethod {
    ATM = 'ATM',
    CARD = 'CARD',
}

export enum RechargesStatus {
    PENDING = 'Đang chờ',
    SUCCESS = 'Thành công',
}

export enum TransactionType {
    SERVICE = 'Dịch Vụ',
    BY_ACCOUNT = 'Mua Account',
}
