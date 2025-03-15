import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { User } from './user.entity';
import { db } from '@/config/db';

export class UserModel extends GeneralModel<User> {
    constructor() {
        super(Table.USER);
    }

    public async updateBalance(id: number, balance: number): Promise<boolean> {
        return await this.update(id, { balance });
    }
}
