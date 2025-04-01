import { Request, Response } from 'express';
import { GeneralController } from '../general';
import { Recharge, RechargeStatus } from './recharge.entity';
import { RechargeService } from './recharge.service';
import { IAppError } from '@/libs/utils/error';
import { ResponseApp } from '@/libs/utils/response';

export class RechargeController extends GeneralController<Recharge> {
    private rechargeService: RechargeService;
    constructor() {
        const rechargeService = new RechargeService();
        super(rechargeService);
        this.rechargeService = rechargeService;
        this.updateStatus = this.updateStatus.bind(this);
        this.findByUser = this.findByUser.bind(this);
        this.getTop5UserRechargeInMonth =
            this.getTop5UserRechargeInMonth.bind(this);
    }

    public async updateStatus(req: Request, res: Response) {
        try {
            const data = req.body;
            const result = await this.rechargeService.updateStatus(
                Number(req.params.rechargeId),
                data.status
            );
            ResponseApp.ok(res, result);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }

    public async findByUser(req: Request, res: Response) {
        try {
            const userId = req.params.userId;
            const result = await this.rechargeService.findByUser(
                Number(userId)
            );
            ResponseApp.ok(res, result);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }

    public async getTop5UserRechargeInMonth(req: Request, res: Response) {
        try {
            const result = await this.rechargeService.top5UserRechargeInMonth();
            ResponseApp.ok(res, result);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }
}

export const rechargeController = new RechargeController();
