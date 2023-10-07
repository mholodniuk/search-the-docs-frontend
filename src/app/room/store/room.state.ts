import { Room } from "../model/room.model";

export interface RoomState {
  rooms: Room[]
  selectedRoom?: Room
  count: number
  creating: boolean
}
