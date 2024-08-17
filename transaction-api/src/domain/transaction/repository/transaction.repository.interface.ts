import { TransactionEntityInterface } from "../entity/transaction.entity.interface";

export interface TransactionRepositoryInterface {
  transfer(userId: string, to: string, amount: number): Promise<void>;
  history(userId: string): Promise<TransactionEntityInterface[]>;
}