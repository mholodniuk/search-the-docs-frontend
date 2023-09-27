import { createAction, props } from '@ngrx/store';
import { AuthRequest, AuthResponse } from "../model/auth.model";
import { User } from "../../user/user.model";

export const loadAuthToken = createAction(
  '[Auth] Load Auth Token',
  props<AuthRequest>()
);

export const authTokenLoaded = createAction(
  '[Auth] Auth Token Loaded',
  props<AuthResponse>()
);

export const authTokenFailure = createAction(
  '[Auth] Load Auth Token Failure',
  props<{ error: string }>()
);

export const loadUserData = createAction(
  '[User] Load User Data',
  props<{ id: number }>()
);

export const userDataLoaded = createAction(
  '[User] User Data Loaded',
  props<{ user?: User }>()
);

export const clearUserData = createAction(
  '[User] Clear User Data'
);

export const userDataCleared = createAction(
  '[User] User Data Cleared'
);

export const loadDataFailure = createAction(
  '[User] Load User Data Failure'
);

export const tryAutoAuthenticate = createAction(
  '[Auth] Try Auto Auth'
);

export const autoAuthenticateFailure = createAction('[Auth] Auto Auth Failure');

export const logOut = createAction(
  '[Auth] Log out'
);
