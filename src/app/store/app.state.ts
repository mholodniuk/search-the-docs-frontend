import { UserState } from "../auth/store/user.state";
import { RoomState } from "../room/store/room.state";
import { SnackbarState } from "../shared/snackbar/store/snackbar.reducer";

export interface AppState {
  userState: UserState
  roomState: RoomState
  snackbarState: SnackbarState
}
