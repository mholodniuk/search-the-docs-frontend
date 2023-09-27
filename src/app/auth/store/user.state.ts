import { User } from "../../user/user.model";

export interface UserState {
  loading: boolean
  user?: User,
  error?: string
  token?: string
}
