import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from "./user.state";

export const selectUserState = createFeatureSelector<UserState>('auth');

export const errorSelector = createSelector(selectUserState, (state) => {
  return state.error;
});

export const userSelector = createSelector(selectUserState, (state) => {
  return state.user;
});

export const userLoggedInSelector = createSelector(selectUserState, (state) => {
  return state.user !== undefined;
});
