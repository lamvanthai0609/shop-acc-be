import { GeneralService } from '../general';
import { AccountGeneralInfo } from './account-general-info.entity';
import { AccountGeneralInfoModel } from './account-general-info.model';

export class AccountGeneralInfoService extends GeneralService<AccountGeneralInfo> {
    private accountGeneralInfoModel: AccountGeneralInfoModel;

    constructor() {
        const accountGeneralInfoModel = new AccountGeneralInfoModel();
        super(accountGeneralInfoModel);
        this.accountGeneralInfoModel = accountGeneralInfoModel;
    }
    public async getAccountByCategorySlug(
        slug: string
    ): Promise<AccountGeneralInfo[]> {
        if (!slug) {
            throw new Error('Slug is required');
        }

        return await this.accountGeneralInfoModel.getAccountByCategorySlug(
            slug
        );
    }
}
