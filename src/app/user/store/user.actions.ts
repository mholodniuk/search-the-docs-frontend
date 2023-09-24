import { createAction, props } from '@ngrx/store';
import { User } from "../user.model";

export const retrieveUserData = createAction(
  '[User] Retrieve User Data',
  props<{ id: number }>()
);

export const updateUserData = createAction(
  '[User] Update User Data',
  props<{ user: User }>()
);

export const retrieveDataFailure = createAction(
  '[User] Retrieve User Data Failure'
);
