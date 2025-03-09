import { GeneralController } from '../general';
import { Recharge } from './recharge.entity';
import { RechargeService } from './recharge.service';

export class RechargeController extends GeneralController<Recharge> {
    constructor() {
        super(new RechargeService());
    }
}
