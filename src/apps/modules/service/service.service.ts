import { GeneralService } from '../general';
import { Service } from './service.entity';
import { ServiceModel } from './service.model';

export class ServiceService extends GeneralService<Service> {
    constructor() {
        super(new ServiceModel());
    }
}
