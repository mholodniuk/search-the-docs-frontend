import { createAction, props } from '@ngrx/store';
import { AuthRequest, AuthResponse } from "../model/auth.model";

export const retrieveAuthToken = createAction(
  '[Auth] Retrieve Auth Token',
  props<AuthRequest>()
);

export const tryAutoAuthenticate = createAction(
  '[Auth] Try Auto Auth'
);

export const autoAuthenticateFailure = createAction('[Auth] Auto Auth Failure');

export const updateAuthToken = createAction(
  '[Auth] Update Auth Token',
  props<AuthResponse>()
);

export const retrieveAuthTokenFailure = createAction('[Auth] Retrieve Auth Token Failure');


export const logOut = createAction(
  '[Auth] Log out'
)
