import type { Room } from "../Room";
import type { User } from "../User";

export interface Message {
  _id: object;
  content: string;
  user: User;
  room: Room;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
