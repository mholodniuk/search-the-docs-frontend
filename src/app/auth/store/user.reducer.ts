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
      error: undefined,
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
      error: undefined
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
      error: undefined,
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
