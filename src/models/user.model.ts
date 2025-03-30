export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export default class UserModel implements IUser {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public email: string,
  ) {}

  static fromJson(json: Record<string, unknown>): UserModel {
    const id = Number(json['id']) || 0;
    const firstName = String(json['firstName'] || '');
    const lastName = String(json['lastName'] || '');
    const email = String(json['email'] || '');
    return new UserModel(id, firstName, lastName, email);
  }
}
