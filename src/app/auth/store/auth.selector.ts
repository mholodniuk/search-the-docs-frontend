import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from "./auth.state";

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const errorSelector = createSelector(selectAuthState, (state) => {
  return state.error;
});
