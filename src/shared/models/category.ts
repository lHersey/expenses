import Transaction from './transaction';

class Category {
  id: string;
  name: string;
  color: string;
  description?: string;
  transactions: Transaction[];

  constructor(id: string, name: string, color: string, description?: string) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.description = description;
    this.transactions = [];
  }
}

export default Category;
