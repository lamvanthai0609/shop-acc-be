import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { AccountGeneralInfo } from './account-general-info.entity';
import { db } from '@/config/db';

export class AccountGeneralInfoModel extends GeneralModel<AccountGeneralInfo> {
    constructor() {
        super(Table.ACCOUNT_GENERAL_INFORMATION);
    }

    public async getAccountByCategorySlug(
        slug: string
    ): Promise<AccountGeneralInfo[]> {
        const field = {
            id: 'agi.id',
            price: 'agi.price',
            discount: 'agi.discount',
            type: 'agi.type',
            status: 'agi.status',
            categoryId: 'agi.categoryId',
            created: 'agi.created',
            updated: 'agi.updated',
        };

        const select = Object.values(field).join(', ');

        const [rows] = await db.query(
            `SELECT SUBSTRING_INDEX(agi.images, ';', 1) AS image, ${select} FROM ${Table.ACCOUNT_GENERAL_INFORMATION} agi JOIN ${Table.CATEGORY} c ON agi.categoryId = c.id WHERE c.slug = '${slug}' and agi.status = 'Còn hàng'`
        );
        return rows as AccountGeneralInfo[];
    }
}
