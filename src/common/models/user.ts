export interface UserBase {
  _id: string;
  phoneNumber: string;
}

export interface User extends UserBase {
  email?: string;
  admin?: boolean;
}