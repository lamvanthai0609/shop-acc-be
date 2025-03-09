import { GeneralService } from '../general';
import { AccountGeneralInfo } from './account-general-info.entity';
import { AccountGeneralInfoModel } from './account-general-info.model';

export class AccountGeneralInfoService extends GeneralService<AccountGeneralInfo> {
    constructor() {
        super(new AccountGeneralInfoModel());
    }
}
