import { TransactionType } from 'shared/enum';

class Transaction {
  id: string;
  date: number;
  ammount: number;
  type: TransactionType;
  accountId: string;

  constructor(id: string, date: number, ammount: number, type: TransactionType, accountId: string) {
    this.id = id;
    this.date = date;
    this.ammount = ammount;
    this.type = type;
    this.accountId = accountId;
  }

  isTransfer() {
    return this.type === TransactionType.TRANSFER;
  }
}

export default Transaction;
