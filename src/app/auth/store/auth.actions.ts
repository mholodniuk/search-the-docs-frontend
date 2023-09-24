import { createAction, props } from '@ngrx/store';
import { AuthRequest, AuthResponse } from "../model/auth.model";

export const retrieveAuthToken = createAction(
  '[Auth] Retrieve Auth Token',
  props<AuthRequest>()
);

export const updateAuthToken = createAction(
  '[Auth] Update Auth Token',
  props<AuthResponse>()
);

export const retrieveAuthTokenFailure = createAction('[Auth] Retrieve Auth Token Failure');
