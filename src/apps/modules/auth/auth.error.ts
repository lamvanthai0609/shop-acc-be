import { AppError } from '@/libs/utils/error';

export class UsernameAndPasswordIncorrect extends AppError {
    constructor() {
        super('Tài khoản hoặc mật khẩu không chính xác', 400);
    }
}

export class LoginSessionExpired extends AppError {
    constructor() {
        super('Phiên đăng nhập hết hạn', 401);
    }
}

export class UsernameRequired extends AppError {
    constructor() {
        super('Username is required', 400);
    }
}

export class PasswordRequired extends AppError {
    constructor() {
        super('Password is required', 400);
    }
}

export class UsernameWrongFormat extends AppError {
    constructor() {
        super('Username wrong format', 400);
    }
}
