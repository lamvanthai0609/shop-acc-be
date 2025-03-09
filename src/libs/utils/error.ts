export interface IAppError extends Error {
    status: number;
}

export class AppError extends Error {
    public status: number;
    constructor(message: string, status: number = 500) {
        super(message);
        this.status = status;
    }
}

export class NotFoundError extends AppError {
    constructor(message: string = 'Not found') {
        super(message, 404);
    }
}

export class Unauthorized extends AppError {
    constructor() {
        super('Không có token hoặc token hết hạn vui lòng đăng nhập lại', 401);
    }
}
export class Forbidden extends AppError {
    constructor() {
        super('Bạn không có quyền', 403);
    }
}
