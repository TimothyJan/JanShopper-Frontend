import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserRegistration } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersChangedSource = new Subject<void>();
  usersChanged$ = this.usersChangedSource.asObservable();

  userID: number = 3;

  users: UserRegistration[] = [
    new UserRegistration(0, "john_doe", "john@example.com", "Password123!"),
    new UserRegistration(1, "jane_doe", "jane@example.com", "Password123!"),
    new UserRegistration(2, "admin", "admin@example.com", "Admin123!")
  ];

  constructor() { }

  /** Get Users */
  getUsers(): UserRegistration[] {
    return this.users;
  }

  /** Get Users based on id */
  getUser(id: number): UserRegistration | undefined {
    for(let i=0; i<this.users.length; i++) {
      if(this.users[i].id == id) {
        return this.users[i];
      }
    }
    return undefined
  }

  /** Post new User */
  addUser(user: UserRegistration): void {
    let newUser = new UserRegistration(this.userID++, user.userName, user.email, user.password);
    this.users.push(newUser);
    // console.log(this.users);
  }

  /** Update existing User based on id */
  updateUser(user: UserRegistration): void {
    for(let i=0; i<this.users.length; i++) {
      if(this.users[i].id == user.id) {
        this.users[i] = user;
      }
    }
  }

  /** Delete User based on id */
  deleteUser(id: number): void {
    for(let i=0; i<this.users.length; i++) {
      if(this.users[i].id == id) {
        this.users.splice(i, 1);
      }
    }
  }

  /** Emit events for users update */
  notifyUsersChanged(): void {
    this.usersChangedSource.next();
  }

}
