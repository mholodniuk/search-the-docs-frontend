import { Room } from "./room.model";

export type AccessRight = "OWNER" | "FULL" | "VIEW" | "NONE";

export interface GrantAccessRequest {
  userToInvite: string
  keyName: string
  validTo?: string
  accessRight: AccessRight
  roomId: number
}

export interface AccessKey {
  id: string
  name: string
  room: Room
  recipient: string
  validTo?: string
  accessRight: AccessRight
}
