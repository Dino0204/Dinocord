import type { User } from "../User";

export interface Room {
  _id: object;
  name: string;
  members: Array<User>;
  owner: User;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
