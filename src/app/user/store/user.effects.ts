import { Injectable } from "@angular/core";
import { UserService } from "../service/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from './user.actions';
import { catchError, map, of, switchMap } from "rxjs";
import * as AuthActions from '../../auth/store/auth.actions';


@Injectable()
export class UserEffects {

  getUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        UserActions.retrieveUserData,
        AuthActions.updateAuthToken
      ),
      switchMap((action) =>
        this.userService.getUser(action.id).pipe(
          map((user) => UserActions.updateUserData({user: user})),
          catchError(() => of(UserActions.retrieveDataFailure()))
        )
      )
    )
  );

  clearUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logOut),
      map((_) => UserActions.updateUserData({user: undefined}))
    )
  );

  constructor(
    private userService: UserService,
    private actions$: Actions) {
  }
}
