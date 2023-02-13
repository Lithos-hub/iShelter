export interface User {
  _id: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
