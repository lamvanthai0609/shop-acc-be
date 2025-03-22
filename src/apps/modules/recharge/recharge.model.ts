import { Table } from '@/libs/utils/constant';
import { GeneralModel } from '../general';
import { Recharge, RechargeStatus } from './recharge.entity';
import { db } from '@/config/db';

export class RechargeModel extends GeneralModel<Recharge> {
    constructor() {
        super(Table.RECHARGE);
    }

    async find(): Promise<Recharge[]> {
        const field = {
            id: 'r.id',
            username: 'u.username',
            userId: 'r.userId',
            denomination: 'r.denomination',
            networkType: 'r.networkType',
            seriNumber: 'r.seriNumber',
            cardCode: 'r.cardCode',
            oldBalance: 'r.oldBalance',
            newBalance: 'r.newBalance',
            method: 'r.method',
            status: 'r.status',
            created: 'r.created',
            updated: 'r.updated',
        };

        const select = Object.values(field).join(', ');

        const [rows] = await db.query(
            `SELECT ${select} FROM ${Table.RECHARGE} as r left join ${Table.USER} as u on r.userId = u.id`
        );
        return rows as Recharge[];
    }
}
