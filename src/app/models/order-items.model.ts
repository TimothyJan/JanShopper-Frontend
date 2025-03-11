export class OrderItems {
  id: number = 0;
  orderId: number = 0;
  productId: number = 0;
  quantity: number = 0;
  price: number = 0.00;

  constructor(
    id: number,
    orderId: number,
    productId: number,
    quantity: number,
    price: number) {
    this.id = id;
    this.orderId = orderId;
    this.productId = productId;
    this.quantity = quantity;
    this.price = price;
  }
}
