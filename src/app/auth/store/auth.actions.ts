import { createAction, props } from '@ngrx/store';

export const getToken = createAction('[Login] Get Token');

export const getTokenSuccess = createAction(
  '[Login] Get Token Success',
  props<{ token: string }>()
);

export const getTokenFailure = createAction('[Login] Get Token Failure');

export const getLogout = createAction('[Login] Get Logout');

export const getLogoutSuccess = createAction('[Login] Get Logout Success');

export const getLogoutFailure = createAction('[Login] Get Logout Failure');
