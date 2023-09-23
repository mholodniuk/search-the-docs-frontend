import { AuthState } from "./auth.state";
import { createReducer, on } from "@ngrx/store";
import * as AuthActions from './auth.actions';

const initialState: AuthState = {
  loading: false,
  error: undefined,
  token: undefined
}

export const AuthReducer = createReducer(
  initialState,

  on(AuthActions.getToken, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),

  on(AuthActions.getTokenSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      token: action.token
    }
  }),

  on(AuthActions.getTokenFailure, (state) => {
    return {
      ...state,
      loading: false,
      token: undefined,
      error: "Failed to log in"
    }
  }),
)
