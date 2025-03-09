import { GeneralService } from '../general';
import { AccountSpecificInfo } from './account-specific-info.entity';
import { AccountSpecificInfoModel } from './account-specific-info.model';

export class AccountSpecificInfoService extends GeneralService<AccountSpecificInfo> {
    constructor() {
        super(new AccountSpecificInfoModel());
    }
}
