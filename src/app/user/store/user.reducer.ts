import { UserState } from "./user.state";
import { createReducer, on } from "@ngrx/store";
import { retrieveUserData, retrieveDataFailure, updateUserData } from "./user.actions";


const initialState: UserState = {
  loading: false
}

export const UserReducer = createReducer<UserState>(
  initialState,

  on(retrieveUserData, (state) => {
    return {
      ...state,
      loading: true
    }
  }),

  on(updateUserData, (state, action) => {
    return {
      ...state,
      user: action.user,
      loading: false
    }
  }),

  on(retrieveDataFailure, (state) => {
    return {
      ...state,
      loading: false
    }
  })
)
