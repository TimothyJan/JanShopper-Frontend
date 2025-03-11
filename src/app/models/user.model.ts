export class UserProfile {
  id: number = 0;
  userName: string = "";
  email: string ="";

  constructor(
    id: number,
    userName: string,
    email: string) {
    this.id = id;
    this.userName = userName;
    this.email = email;
  }
}

export class UserRegistration extends UserProfile {
  password: string ="";

  // Call the parent class constructor using super()
  constructor(
    id: number,
    userName: string,
    email: string,
    password: string) {
    super(id, userName, email);
    this.password = password;
  }
}
