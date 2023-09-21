import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state'

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const tokenSelector = createSelector(selectAuthState, (state) => {
  return state.token;
});

export const isLoadingSelector = createSelector(selectAuthState, (state) => state.loading);

export const loggedInSelector = createSelector(selectAuthState, (state) => state.user !== undefined);

export const userSelector = createSelector(selectAuthState, (state) => state.user);
