import { Room, SelectedRoom } from "../model/room.model";

export interface RoomState {
  rooms: Room[];
  selectedRoom?: SelectedRoom;
  count: number;
  creating: boolean;
}
