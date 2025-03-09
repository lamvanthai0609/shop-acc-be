import { GeneralController } from '../general';
import { AccountSpecificInfo } from './account-specific-info.entity';
import { AccountSpecificInfoService } from './account-specific-info.service';

export class AccountSpecificInfoController extends GeneralController<AccountSpecificInfo> {
    constructor() {
        super(new AccountSpecificInfoService());
    }
}
