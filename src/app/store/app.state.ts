import { UserState } from "../auth/store/user.state";
import { RoomState } from "../room/store/room.state";
import { SnackbarState } from "../shared/snackbar/store/snackbar.reducer";
import { DocumentState } from "../document/store/document.state";
import { SearchState } from "../search/store/search.state";

export interface AppState {
  userState: UserState;
  roomState: RoomState;
  documentState: DocumentState;
  snackbarState: SnackbarState;
  searchState: SearchState;
}
