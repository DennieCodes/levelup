import { ObjectId } from "mongodb";

export default class User {
  constructor(
    public name: string,
    public email: number,
    public password: string,
    public id?: ObjectId
  ) {}
}
