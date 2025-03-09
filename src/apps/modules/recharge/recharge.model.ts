import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { Recharge } from './recharge.entity';

export class RechargeModel extends GeneralModel<Recharge> {
    constructor() {
        super(Table.RECHARGE);
    }
}
