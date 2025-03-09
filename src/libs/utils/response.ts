import { Response } from 'express';
import { IAppError } from './error';

class ResponseClass {
    private success<T>(
        res: Response,
        status: number,
        data: T,
        pagination?: any
    ) {
        return res.status(status).json({
            message: 'Success!',
            status: status,
            success: true,
            results: data,
            meta: pagination,
        });
    }

    public ok<T>(res: Response, data: T, pagination?: any) {
        return this.success(res, 200, data, pagination);
    }

    public created<T>(res: Response, data: T) {
        return this.success(res, 201, data);
    }

    public failed(res: Response, error: IAppError, status?: number) {
        return res.status(status || error?.status || 500).json({
            message: error.message,
            status: status || error.status,
            success: false,
        });
    }

    public done(res: Response) {
        return res.status(200).end();
    }
}

export const ResponseApp = new ResponseClass();
