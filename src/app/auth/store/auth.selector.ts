import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state'

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const tokenSelector = createSelector(selectAuthState, (state) => {
  return state.token;
});

export const loadingSelector = createSelector(selectAuthState, (state) => state.loading);
export const errorSelector = createSelector(selectAuthState, (state) => state.error);
