import {
    RechargeMethod,
    RechargeNetworkType,
    RechargeStatus,
} from './recharge.entity';

export interface BaseRechargeRequest {
    userId: number;
    denomination: number;
    method: RechargeMethod;
}

export type RechargeRequest =
    | (BaseRechargeRequest & {
          method: RechargeMethod.ATM;
          networkType?: never;
          seriNumber?: never;
          cardCode?: never;
          status: RechargeStatus.SUCCESS;
      })
    | (BaseRechargeRequest & {
          method: RechargeMethod.CARD;
          networkType: RechargeNetworkType;
          seriNumber: string;
          cardCode: string;
          status: RechargeStatus.PENDING;
      });
