import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { AccountSpecificInfo } from './account-specific-info.entity';

export class AccountSpecificInfoModel extends GeneralModel<AccountSpecificInfo> {
    constructor() {
        super(Table.ACCOUNT_SPECIFIC_INFORMATION);
    }
}
