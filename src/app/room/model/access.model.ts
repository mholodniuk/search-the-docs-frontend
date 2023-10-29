import { Room } from "./room.model";

export type AccessRight = "OWNER" | "FULL" | "VIEW" | "NONE";

export interface GrantAccessRequest {
  userToInvite: string
  keyName: string
  validTo?: string
  accessRight: AccessRight
  roomId: number
}

export interface RevokeAccessRequest {
  userId: number;
  roomId: number
}

export interface AccessKey {
  id: string
  name: string
  room: Room
  recipient: string
  recipientId: number
  validTo?: string
  accessRight: AccessRight
}

export type AccessKeyDto = Omit<AccessKey, 'room'>
