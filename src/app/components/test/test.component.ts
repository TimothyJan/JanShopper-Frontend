import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { UserRegistration } from '../../models/user.model';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{
  categorys: Category[] = [];
  users: UserRegistration[] = [];
  products: Product[] = [];

  constructor(
    private _categoryService: CategoryService,
    private _userService: UserService,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getCategorys();
    this.getUsers();
    this.getProducts();
  }

  getCategorys(): void {
    this.categorys = this._categoryService.getCategorys();
  }

  getUsers(): void {
    this.users = this._userService.getUsers();
  }

  getProducts(): void {
    this.products = this._productService.getProducts();
  }
}
