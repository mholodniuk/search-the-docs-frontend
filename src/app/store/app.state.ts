import { UserState } from "../auth/store/user.state";
import { RoomState } from "../room/store/room.state";

export interface AppState {
  userState: UserState
  roomState: RoomState
}
