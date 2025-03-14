export class Product {
  id: number = 0;
  name: string = "";
  description: string = "";
  price: number = 0.00;
  stock: number = 0;
  categoryId: number = 0;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    categoryId: number,
    categoryName?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.categoryId = categoryId;
  }
}
