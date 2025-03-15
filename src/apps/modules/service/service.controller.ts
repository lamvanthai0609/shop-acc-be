import { GeneralController } from '../general';
import { Service } from './service.entity';
import { ServiceService } from './service.service';

export class ServiceController extends GeneralController<Service> {
    constructor() {
        super(new ServiceService());
    }
}

export const serviceController = new ServiceController();
