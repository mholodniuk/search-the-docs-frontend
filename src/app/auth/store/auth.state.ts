import { User } from "../model/user.model";

export interface AuthState {
  user?: User
  loading: boolean
  error?: string
  token?: string
}
