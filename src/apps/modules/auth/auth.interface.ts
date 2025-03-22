import { User } from '../user';

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    token: {
        accessToken: string;
    };
    user: Omit<User, 'password'>;
}

export type RegisterRequest = Pick<
    User,
    'username' | 'password' | 'name' | 'email' | 'numberPhone'
>;

export interface TokenPayload {
    id: number;
    username: string;
    role: string;
}

export interface ChangePasswordRequest {
    userId: number;
    oldPassword: string;
    newPassword: string;
}
