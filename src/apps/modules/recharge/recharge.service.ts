import { AppError } from '@/libs/utils/error';
import { GeneralService } from '../general';
import {
    Recharge,
    RechargeMethod,
    RechargeNetworkType,
    RechargeStatus,
} from './recharge.entity';
import { RechargeRequest } from './recharge.interface';
import { RechargeModel } from './recharge.model';
import { MySQLTransaction } from '../common/transactiondb';
import { UserService } from '../user';

export class RechargeService extends GeneralService<Recharge> {
    private transactionDB = new MySQLTransaction();
    private userService = new UserService();
    private rechargeModel: RechargeModel;
    constructor() {
        const rechargeModel = new RechargeModel();
        super(rechargeModel);
        this.rechargeModel = rechargeModel;
    }

    public async save(data: RechargeRequest): Promise<any> {
        const userId = data?.userId;
        const denomination = data?.denomination;
        const method = data?.method;
        const networkType = data?.networkType;
        const seriNumber = data?.seriNumber;
        const cardCode = data?.cardCode;

        if (!userId || !denomination || !method) {
            throw new AppError('Thiếu thông tin', 400);
        }

        const user = await this.userService.findById(userId);
        if (!user) {
            throw new AppError('Người dùng không tồn tại', 400);
        }

        let recharge: RechargeRequest & {
            oldBalance: number;
            newBalance?: number;
        } = {} as any;

        if (method === RechargeMethod.CARD) {
            if (!networkType) throw new AppError('Thiếu thông tin', 400);
            if (!Object.values(RechargeNetworkType).includes(networkType)) {
                throw new AppError('Mạng không hợp lệ', 400);
            }
            if (
                ![10000, 20000, 50000, 100000, 200000, 300000, 500000].includes(
                    Number(denomination)
                )
            ) {
                throw new AppError('Mệnh giá không hợp lệ', 400);
            }
            if (!seriNumber || !cardCode) {
                throw new AppError('Thiếu thông tin', 400);
            }

            recharge = {
                userId,
                denomination: Number(denomination),
                oldBalance: Number(user.balance),
                seriNumber,
                cardCode,
                method: RechargeMethod.CARD,
                networkType,
                status: RechargeStatus.PENDING,
            };
        }

        if (method === RechargeMethod.ATM) {
            recharge = {
                userId,
                denomination: Number(denomination),
                oldBalance: Number(user.balance),
                newBalance: Number(user.balance) + Number(denomination),
                method: RechargeMethod.ATM,
                status: RechargeStatus.SUCCESS,
            };
        }
        this.transactionDB.begin();
        try {
            const rechargeSave = await super.save(recharge);
            if (!rechargeSave) {
                throw new AppError('Nạp tiền thất bại', 500);
            }

            if (recharge.method === RechargeMethod.ATM && recharge.newBalance) {
                const updateBalanceUser = await this.userService.updateBalance(
                    userId,
                    Number(recharge.newBalance)
                );
                if (!updateBalanceUser) {
                    throw new AppError('Nạp tiền thất bại', 500);
                }
            }

            this.transactionDB.commit();
            return rechargeSave;
        } catch (error) {
            this.transactionDB.rollback();
            throw error;
        }
    }

    public async updateStatus(
        id: number,
        status: RechargeStatus
    ): Promise<any> {
        if (!id || !status) {
            throw new AppError('Thiếu thông tin', 400);
        }

        if (!Object.values(RechargeStatus).includes(status)) {
            throw new AppError('Trạng thái không hợp lệ', 400);
        }

        const recharge = await this.rechargeModel.findById(id);

        if (!recharge) {
            throw new AppError('Giao dịch không tồn tại', 400);
        }

        const user = await this.userService.findById(recharge.userId);
        if (!user) {
            throw new AppError('Người dùng không tồn tại', 400);
        }

        if (recharge.status === status) {
            throw new AppError('Trạng thái không thay đổi', 400);
        }

        this.transactionDB.begin();
        try {
            let newBalance = Number(recharge.newBalance);
            let oldBalance = Number(recharge.oldBalance);
            if (
                status === RechargeStatus.SUCCESS &&
                !Number(recharge.newBalance)
            ) {
                newBalance =
                    Number(user.balance) + Number(recharge.denomination);
                oldBalance = Number(user.balance);
            }
            const data = await super.update(id, {
                status,
                updated: new Date(),
                newBalance,
                oldBalance,
            });
            if (!data) {
                throw new AppError('Cập nhật trạng thái thất bại', 500);
            }

            if (
                status === RechargeStatus.SUCCESS &&
                !Number(recharge.newBalance)
            ) {
                const newBalance =
                    Number(user.balance) + Number(recharge.denomination);
                const updateBalanceUser = await this.userService.updateBalance(
                    recharge.userId,
                    newBalance
                );
                if (!updateBalanceUser) {
                    throw new AppError('Nạp tiền thất bại', 500);
                }
            }

            if (
                status === RechargeStatus.FAILED &&
                Number(recharge.newBalance)
            ) {
                const updateBalanceUser = await this.userService.updateBalance(
                    recharge.userId,
                    recharge.oldBalance
                );
                if (!updateBalanceUser) {
                    throw new AppError('Nạp tiền thất bại', 500);
                }
            }
            this.transactionDB.commit();
            return true;
        } catch (error) {
            this.transactionDB.rollback();
            throw error;
        }
    }

    public async findByUser(userId: number): Promise<Recharge[]> {
        return await this.rechargeModel.findByFields({ userId });
    }
}
