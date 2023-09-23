import { createAction, props } from '@ngrx/store';
import { User } from "../user.model";

export const getUserData = createAction(
  '[User] Get User Data',
  props<{ id: number }>()
);

export const getUserDataSuccess = createAction(
  '[User] Get User Data Success',
  props<{ user: User }>()
);

export const getUserDataFailure = createAction(
  '[User] Get User Data Failure'
);
