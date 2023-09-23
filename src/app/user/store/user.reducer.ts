import { UserState } from "./user.state";
import { createReducer, on } from "@ngrx/store";
import { getUserData, getUserDataFailure, getUserDataSuccess } from "./user.actions";


const initialState: UserState = {
  loading: false
}

export const UserReducer = createReducer(
  initialState,

  on(getUserData, (state) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(getUserDataSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      loading: false
    }
  }),

  on(getUserDataFailure, (state) => {
    return {
      ...state,
      loading: false
    }
  })
)
