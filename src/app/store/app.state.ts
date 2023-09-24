import { AuthState } from "../auth/store/auth.state";
import { UserState } from "../user/store/user.state";

export interface AppState {
  authState: AuthState
  userState: UserState
}
