import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsChangedSource = new Subject<void>();
  productsChanged$ = this.productsChangedSource.asObservable();

  productID: number = 10;

  products: Product[] = [
    new Product(0, "Laptop", "High-performance laptop with 16GB RAM and 512GB SSD", 1200.00, 10, 0),
    new Product(1, "Smartphone", "Latest smartphone with 128GB storage and 5G support", 800.00, 25, 0),
    new Product(2, "Headphones", "Noise-cancelling over-ear headphones", 250.00, 30, 1),
    new Product(3, "T-Shirt", "Cotton T-Shirt in various colors", 20.00, 50, 1),
    new Product(4, "Jeans", "Noise-cancelling over-ear headphones", 250.00, 30, 1),
    new Product(5, "Headphones", "Slim-fit jeans for men", 50.00, 40, 1),
    new Product(6, "Sneakers", "Comfortable running shoes", 80.00, 20, 1),
    new Product(7, "Chocolate Bar", "Dark chocolate bar with 70% cocoa", 5.00, 100, 2),
    new Product(8, "Energy Drink", "Sugar-free energy drink", 3.00, 75, 2),
    new Product(9, "Granola Bars", "Healthy granola bars with nuts and honey", 4.00, 60, 2),
  ];

  constructor() { }

  /** Get Products */
  getProducts(): Product[] {
    return this.products;
  }

  /** Get Products based on id */
  getProduct(id: number): Product | undefined {
    for(let i=0; i<this.products.length; i++) {
      if(this.products[i].id == id) {
        return this.products[i];
      }
    }
    return undefined
  }

  /** Post new Product */
  addProduct(product: Product): void {
    let newProduct = new Product(this.productID++, product.name, product.description, product.price, product.stock, product.categoryId);
    this.products.push(newProduct);
    // console.log(this.products);
  }

  /** Update existing Product based on id */
  updateProduct(product: Product): void {
    for(let i=0; i<this.products.length; i++) {
      if(this.products[i].id == product.id) {
        this.products[i] = product;
      }
    }
  }

  /** Delete Product based on id */
  deleteProduct(id: number): void {
    for(let i=0; i<this.products.length; i++) {
      if(this.products[i].id == id) {
        this.products.splice(i, 1);
      }
    }
  }

  /** Emit events for products update */
  notifyProductsChanged(): void {
    this.productsChangedSource.next();
  }

}
