export class Order {
  id: number = 0;
  userId: number = 0;
  orderDate: string = "";
  totalAmount: number = 0.00;
  status: string = "";

  constructor(
    id: number,
    userId: number,
    orderDate: string,
    totalAmount: number,
    status: string) {
    this.id = id;
    this.userId = userId;
    this.orderDate = orderDate;
    this.totalAmount = totalAmount;
    this.status = status
  }
}
