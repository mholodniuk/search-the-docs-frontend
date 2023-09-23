import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserService } from "../service/user.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserActions from './user.actions';
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class UserEffects {

  getUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserData),
      mergeMap((action) =>
        this.userService.getUser(action.id).pipe(
          map((user) => UserActions.getUserDataSuccess({user: user})),
          catchError(() => of(UserActions.getUserDataFailure))
        )
      )
    )
  );

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private actions$: Actions) {
  }
}
