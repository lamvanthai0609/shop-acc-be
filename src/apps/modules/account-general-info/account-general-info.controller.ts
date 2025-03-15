import { ResponseApp } from '@/libs/utils/response';
import { GeneralController } from '../general';
import { AccountGeneralInfo } from './account-general-info.entity';
import { AccountGeneralInfoService } from './account-general-info.service';
import { Request, Response } from 'express';
import { IAppError } from '@/libs/utils/error';

export class AccountGeneralInfoController extends GeneralController<AccountGeneralInfo> {
    private accountGeneralInfoService: AccountGeneralInfoService;
    constructor() {
        const accountGeneralInfoService = new AccountGeneralInfoService();
        super(accountGeneralInfoService);
        this.accountGeneralInfoService = accountGeneralInfoService;
        this.getAccountByCategorySlug =
            this.getAccountByCategorySlug.bind(this);
    }

    public async getAccountByCategorySlug(req: Request, res: Response) {
        try {
            const slug = req.params.slug;
            const data =
                await this.accountGeneralInfoService.getAccountByCategorySlug(
                    slug
                );
            ResponseApp.ok(res, data);
        } catch (error) {
            ResponseApp.failed(res, error as IAppError);
        }
    }
}

export const accountGeneralInfoController = new AccountGeneralInfoController();
