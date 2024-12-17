export interface IUserEntity {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IWhereFindUser {
  id?: number;
  userName?: string;
  email?: string;
}
