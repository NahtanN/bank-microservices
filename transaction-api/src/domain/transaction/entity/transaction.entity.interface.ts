export interface TransactionEntityInterface {
  transactionId: string;
  userSenderId: string;
  userReceiverId: string;
  amount: number;
  description: string;
  senderBalanceBefore: number;
  senderBalanceAfter: number;
  receiverBalanceBefore: number;
  receiverBalanceAfter: number;
  createdAt: Date;
}