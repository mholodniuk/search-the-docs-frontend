import { createAction, props } from '@ngrx/store';
import { AuthRequest } from "../model/auth.model";

export const getToken = createAction(
  '[Auth] Get Token',
  props<AuthRequest>()
);

export const getTokenSuccess = createAction(
  '[Auth] Get Token Success',
  props<{ token: string }>()
);

export const getTokenFailure = createAction('[Auth] Get Token Failure');
