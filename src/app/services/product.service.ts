import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsChangedSource = new Subject<void>();
  productsChanged$ = this.productsChangedSource.asObservable();

  productID: number = 3;

  products: Product[] = [
    new Product(0, "john_doe", "john@example.com", "Password123!"),
    new Product(1, "jane_doe", "jane@example.com", "Password123!"),
    new Product(2, "admin", "admin@example.com", "Admin123!")
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
    let newProduct = new Product(this.productID++, product.productName, product.email, product.password);
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
