import { UserState } from "./user.state";
import { createReducer, on } from "@ngrx/store";
import * as AuthActions from './user.actions';

const initialState: UserState = {
  loading: false,
  error: undefined,
  user: undefined,
  token: undefined
}

export const UserReducer = createReducer(
  initialState,

  on(AuthActions.loadAuthToken, (state) => {
    return {
      ...state,
      loading: true,
    }
  }),

  on(AuthActions.authTokenLoaded, (state, action) => {
    return {
      ...state,
      loading: false,
      token: action.token
    }
  }),

  on(AuthActions.authTokenFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      token: undefined,
      error: action.error
    }
  }),

  on(AuthActions.autoAuthenticateFailure, (state) => {
    return {
      ...state,
      loading: false,
      token: undefined,
      error: "Could not perform auto log-in"
    }
  }),

  on(AuthActions.logOut, (state) => {
    return {
      ...state,
      token: undefined,
      loading: false,
      error: undefined
    }
  }),

  on(AuthActions.loadUserData, (state) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(AuthActions.userDataLoaded, (state, action) => {
    return {
      ...state,
      user: action.user,
      loading: false
    }
  }),

  on(AuthActions.loadDataFailure, (state) => {
    return {
      ...state,
      loading: false
    }
  }),

  on(AuthActions.clearUserData, (state) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(AuthActions.userDataCleared, (state) => {
    return {
      ...state,
      user: undefined,
      loading: false
    }
  })
)
