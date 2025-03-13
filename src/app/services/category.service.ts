import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categorysChangedSource = new Subject<void>();
  categorysChanged$ = this.categorysChangedSource.asObservable();

  categoryID: number = 3;

  categorys: Category[] = [
    new Category(0, "ELECTRONICS"),
    new Category(1, "FASHION"),
    new Category(2, "FOOD")
  ];

  constructor() { }

  /** Get Categorys */
  getCategorys(): Category[] {
    return this.categorys;
  }

  /** Get Categorys based on id */
  getCategory(id: number): Category | undefined {
    for(let i=0; i<this.categorys.length; i++) {
      if(this.categorys[i].id == id) {
        return this.categorys[i];
      }
    }
    return undefined
  }

  /** Post new Category */
  addCategory(category: Category): void {
    let newCategory = new Category(this.categoryID++, category.name);
    this.categorys.push(newCategory);
    // console.log(this.categorys);
  }

  /** Update existing Category based on id */
  updateCategory(category: Category): void {
    for(let i=0; i<this.categorys.length; i++) {
      if(this.categorys[i].id == category.id) {
        this.categorys[i] = category;
      }
    }
  }

  /** Delete Category based on id */
  deleteCategory(id: number): void {
    for(let i=0; i<this.categorys.length; i++) {
      if(this.categorys[i].id == id) {
        this.categorys.splice(i, 1);
      }
    }
  }

  /** Emit events for categorys update */
  notifyCategorysChanged(): void {
    this.categorysChangedSource.next();
  }

}
