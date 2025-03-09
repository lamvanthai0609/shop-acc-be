import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { AccountGeneralInfo } from './account-general-info.entity';

export class AccountGeneralInfoModel extends GeneralModel<AccountGeneralInfo> {
    constructor() {
        super(Table.ACCOUNT_GENERAL_INFORMATION);
    }
}
