import { AppError } from '@/libs/utils/error';
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
            throw new AppError('Unauthorized', 401);
        }
        const { userId, accountId } = data;
        const user = await this.userService.findById(userId);
        const account = await this.accountService.findById(accountId);

        if (!user || !account) {
            throw new AppError('Tài khoản hoặc người dùng không tồn tại', 400);
        }

        if (user.balance < account.price) {
            throw new AppError('Bạn không đủ tiền', 400);
        }

        if (account.status === 'Đã bán') {
            throw new AppError('Tài khoản đã bán', 400);
        }

        user.balance -= account.price;
        this.transactionDB.begin();
        try {
            const updateBalanceUser = await this.userService.updateBalance(
                userId,
                user.balance
            );
            if (!updateBalanceUser) {
                throw new AppError('Mua tài khoản thất bại', 500);
            }
            const updateStatusAccount = await this.accountService.update(
                accountId,
                { status: 'Đã bán' }
            );
            if (!updateStatusAccount) {
                throw new AppError('Mua tài khoản thất bại', 500);
            }
            const transaction = await this.transactionModel.save({
                userId,
                accountId,
                amount: account.price,
                type: 'Mua Account',
                finalBalance: user.balance,
            });

            if (!transaction) {
                throw new AppError('Mua tài khoản thất bại', 500);
            }

            this.transactionDB.commit();
            return true;
        } catch (error) {
            this.transactionDB.rollback();
            throw error;
        }
    }

    public async findByUser(userId: number) {
        if (!userId) {
            throw new Error('Invalid data');
        }
        return this.transactionModel.findByUser(userId);
    }
}
