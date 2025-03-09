import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { User } from './user.entity';

export class UserModel extends GeneralModel<User> {
    constructor() {
        super(Table.USER);
    }
}
