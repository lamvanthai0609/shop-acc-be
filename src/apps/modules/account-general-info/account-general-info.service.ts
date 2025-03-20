import { AccountSpecificInfoModel } from '../account-specific-info/account-specific-info.model';
import { GeneralService } from '../general';
import { Account, AccountGeneralInfo } from './account-general-info.entity';
import { AccountGeneralInfoModel } from './account-general-info.model';

export class AccountGeneralInfoService extends GeneralService<AccountGeneralInfo> {
    private accountGeneralInfoModel: AccountGeneralInfoModel;
    private accountSpecificInfoModel: AccountSpecificInfoModel =
        new AccountSpecificInfoModel();

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

    public async getAccounts(): Promise<Account[]> {
        return await this.accountGeneralInfoModel.getAccounts();
    }

    public async save(
        data: AccountGeneralInfo & { username: string }
    ): Promise<number> {
        const accountGeneralInfo = {
            images: data.images,
            price: data.price,
            discount: data.discount,
            type: data.type,
            categoryId: data.categoryId,
            status: data.status,
        };

        const id = await super.save(accountGeneralInfo);
        const accountSpecificInfo = {
            accountId: id,
            username: data.username,
            password: 'test',
        };
        await this.accountSpecificInfoModel.save(accountSpecificInfo);

        return id;
    }

    public async updateData(
        id: number,
        data: AccountGeneralInfo & { username: string }
    ): Promise<boolean> {
        const accountGeneralInfo = {
            images: data.images,
            price: data.price,
            discount: data.discount,
            type: data.type,
            categoryId: data.categoryId,
            status: data.status,
        };

        const success = await super.update(id, accountGeneralInfo);
        if (!success) {
            return false;
        }

        const accountSpecificInfo = {
            username: data.username,
        };
        await this.accountSpecificInfoModel.update(id, accountSpecificInfo);

        return true;
    }
}
