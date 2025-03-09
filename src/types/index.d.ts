import { Request } from 'express';

declare module 'express' {
    export interface Request {
        userId?: number;
        role?: string;
    }
}
