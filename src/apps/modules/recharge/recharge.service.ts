import { GeneralService } from '../general';
import { Recharge } from './recharge.entity';
import { RechargeModel } from './recharge.model';

export class RechargeService extends GeneralService<Recharge> {
    constructor() {
        super(new RechargeModel());
    }
}
