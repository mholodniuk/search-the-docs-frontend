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

  on(AuthActions.retrieveAuthToken, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),

  on(AuthActions.updateAuthToken, (state, action) => {
    return {
      ...state,
      loading: false,
      token: action.token
    }
  }),

  on(AuthActions.retrieveAuthTokenFailure, (state) => {
    return {
      ...state,
      loading: false,
      token: undefined,
      error: "Failed to log in"
    }
  }),

  on(AuthActions.logOut, (state) => {
    return {
      ...state,
      token: undefined,
      loading: false,
      error: undefined
    }
  })
)
