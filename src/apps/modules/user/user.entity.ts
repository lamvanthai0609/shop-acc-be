import { Role, UserStatus } from './user.enum';

export interface User {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    balance: number;
    numberPhone: string;
    status: UserStatus;
    role: Role;
    created: Date;
    updated: Date;
}
