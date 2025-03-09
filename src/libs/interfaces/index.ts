// interface User {
//     id: number;
//     username: string;
//     password: string;
//     name: string;
//     email: string;
//     balance: number;
//     numberPhone: string;
//     status: 'ACTIVE' | 'INACTIVE';
//     created: Date;
//     updated: Date;
// }

// interface Category {
//     id: number;
//     name: string;
//     image: string;
//     created: Date;
//     updated: Date;
// }

// interface AccountGeneralInfo {
//     id: number;
//     name: string;
//     priceAtm: number;
//     priceCard: number;
//     discount: number;
//     username: string;
//     type: string;
//     status: 'Còn hàng' | 'Đã bán';
//     categoryId: number | null;
//     created: Date;
//     updated: Date;
// }

// interface AccountSpecificInfo {
//     id: number;
//     username: string;
//     password: string;
//     accountId: number;
// }

// interface Image {
//     id: number;
//     url: string;
//     accountId: number;
// }

// interface Recharge {
//     id: number;
//     userId: number;
//     denomination: number;
//     oldBalance: number;
//     newBalance: number;
//     method: 'ATM' | 'CARD';
//     status: 'Thành công' | 'Đang chờ';
//     created: Date;
//     updated: Date;
// }

// interface Transaction {
//     id: number;
//     userId: number;
//     type: 'Dịch Vụ' | 'Mua Account';
//     accountId: number | null;
//     serviceId: number | null;
//     amount: number;
//     finalBalance: number;
//     created: Date;
//     updated: Date;
// }

// interface Service {
//     id: number;
//     name: string;
// }
