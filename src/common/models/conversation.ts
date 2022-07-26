import { UserBase } from "./user"

export interface Conversation {
  _id: string
  participants: UserBase[]
}