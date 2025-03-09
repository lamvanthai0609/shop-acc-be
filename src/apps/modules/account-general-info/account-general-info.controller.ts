import { GeneralController } from '../general';
import { AccountGeneralInfo } from './account-general-info.entity';
import { AccountGeneralInfoService } from './account-general-info.service';

export class AccountGeneralInfoController extends GeneralController<AccountGeneralInfo> {
    constructor() {
        super(new AccountGeneralInfoService());
    }
}
