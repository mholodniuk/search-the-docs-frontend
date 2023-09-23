import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from "./user.state";

export const selectUserState = createFeatureSelector<UserState>('user');

export const userSelector = createSelector(selectUserState, (state) => {
  return state.user;
});

export const loggedInSelector = createSelector(selectUserState, (state) => !!state.user);


export const loadingSelector = createSelector(selectUserState, (state) => state.loading);
