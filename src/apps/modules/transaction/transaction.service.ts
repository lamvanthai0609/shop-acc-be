import { AccountGeneralInfoService } from '../account-general-info';
import { MySQLTransaction } from '../common/transactiondb';
import { GeneralService } from '../general';
import { UserService } from '../user';
import { Transaction } from './transaction.entity';
import { BuyAccountRequest } from './transaction.interface';
import { TransactionModel } from './transaction.model';

export class TransactionService extends GeneralService<Transaction> {
    private transactionModel: TransactionModel;
    private userService = new UserService();
    private accountService = new AccountGeneralInfoService();
    private transactionDB = new MySQLTransaction();

    constructor() {
        const transactionModel = new TransactionModel();
        super(transactionModel);
        this.transactionModel = transactionModel;
    }

    public async buyAccount(data: BuyAccountRequest) {
        if (!data.userId || !data.accountId) {
            throw new Error('Invalid data');
        }
        const { userId, accountId } = data;
        const user = await this.userService.findById(userId);
        const account = await this.accountService.findById(accountId);

        if (!user || !account) {
            throw new Error('User or Account Not found');
        }

        if (user.balance < account.price) {
            throw new Error('Not enough balance');
        }

        user.balance -= account.price;
        const userUpdate = await this.userService.updateBalance(
            userId,
            user.balance
        );
        if (!userUpdate) {
            throw new Error('Update balance failed');
        }

        this.transactionDB.begin();

        try {
            const updateBalanceUser = await this.userService.updateBalance(
                userId,
                user.balance
            );
            if (!updateBalanceUser) {
                throw new Error('Update balance failed');
            }
            const updateStatusAccount = await this.accountService.update(
                accountId,
                { status: 'Đã bán' }
            );
            if (!updateStatusAccount) {
                throw new Error('Update status account failed');
            }
            const transaction = await this.transactionModel.save({
                userId,
                accountId,
                amount: account.price,
                type: 'Mua Account',
                finalBalance: user.balance,
            });

            if (!transaction) {
                throw new Error('Transaction failed');
            }

            this.transactionDB.commit();
            return true;
        } catch (error) {
            this.transactionDB.rollback();
            throw error;
        }
    }
}
