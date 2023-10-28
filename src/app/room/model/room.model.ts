import { User } from "../../user/user.model";
import { AccessKeyDto } from "./access.model";

export interface Room {
  id: number
  name: string
  isPrivate: boolean
  isOwner: boolean
  createdAt: string
  modifiedAt: string
  documentCount: number
}

export interface SelectedRoom extends Room {
  tags: string[];
  owner: User;
  accessKeys: AccessKeyDto[];
}

export interface RoomCollection {
  rooms: Room[]
  count: number
}

export interface TagCollection {
  tags: string[]
  count: number
}

export interface CreateRoomRequest {
  name: string
  isPrivate: boolean
  ownerId: number
}

export type CreateRoomEvent = Omit<CreateRoomRequest, 'ownerId'>
