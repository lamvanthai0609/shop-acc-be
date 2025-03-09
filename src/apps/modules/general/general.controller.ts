import { ResponseApp } from '@/libs/utils/response';
import { Request, Response } from 'express';
import { GeneralService } from './general.service';
import { IAppError } from '@/libs/utils/error';

class GeneralController<T> {
    private service: GeneralService<T>;

    constructor(service: GeneralService<T>) {
        this.service = service;
        this.find = this.find.bind(this);
        this.findById = this.findById.bind(this);
        this.save = this.save.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    public async find(req: Request, res: Response) {
        try {
            const data = await this.service.find();
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }

    public async findById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data = await this.service.findById(Number(id));
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }

    public async save(req: Request, res: Response) {
        try {
            const newId = await this.service.save(req.body);
            ResponseApp.created(res, { id: newId });
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const success = await this.service.update(Number(id), req.body);
            if (!success)
                ResponseApp.failed(res, {
                    message: 'Update failed',
                    status: 400,
                } as IAppError);
            ResponseApp.done(res);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const success = await this.service.delete(Number(id));
            if (!success)
                ResponseApp.failed(res, {
                    message: 'Delete failed',
                    status: 400,
                } as IAppError);
            ResponseApp.done(res);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }
}

export { GeneralController };
