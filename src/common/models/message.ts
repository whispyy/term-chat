
import { UserBase } from "./user";

export enum MessageStatus {
  Pending = 'pending',
  Success = 'success',
  Error = 'error',
}

export interface Message {
  id: string;
  timestamp: Date;
  message: string;
  author: string;
  authorDetail?: UserBase
  conversationId: string;
  status: MessageStatus;
  beginBlock?: boolean;
}