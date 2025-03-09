import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { Service } from './service.entity';

export class ServiceModel extends GeneralModel<Service> {
    constructor() {
        super(Table.SERVICE);
    }
}
