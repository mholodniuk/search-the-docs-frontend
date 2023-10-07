import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../service/auth-service";
import * as UserActions from './user.actions';
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { UserApiService } from "../../user/service/user-api.service";

@Injectable()
export class UserEffects {
  authenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadAuthToken),
      switchMap((action) => {
        return this.authService.authenticate({username: action.username, password: action.password}).pipe(
          tap((authResponse) => this.authService.setAuthToken(authResponse)),
          map((token) => UserActions.authTokenLoaded(token)),
          catchError((error: HttpErrorResponse) => of(UserActions.authTokenFailure({error: error.error.message})))
        )
      })
    )
  );

  autoAuthenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.tryAutoAuthenticate),
      switchMap(() => {
        return this.authService.getAuthToken().pipe(
          map((token) => {
            if (token) {
              return UserActions.authTokenLoaded(token);
            }
            return UserActions.autoAuthenticateFailure();
          }),
          catchError(() => of(UserActions.autoAuthenticateFailure()))
        )
      })
    )
  );

  authenticationRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.authTokenLoaded),
        tap(() => void this.router.navigate(['/']))
      ),
    {dispatch: false}
  );

  authenticationFailureCleanup$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.authTokenFailure),
        tap(() => this.authService.deleteAuthToken())
      ),
    {dispatch: false}
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logOut),
        map(() => {
          this.authService.deleteAuthToken();
          void this.router.navigate(['/']);
          return UserActions.clearUserData()
        }),
      )
  );

  getUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        UserActions.loadUserData,
        UserActions.authTokenLoaded
      ),
      switchMap((action) =>
        this.userService.getUser(action.userId).pipe(
          map((user) => UserActions.userDataLoaded({user: user})),
          catchError(() => of(UserActions.loadDataFailure()))
        )
      )
    )
  );

  clearUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.clearUserData),
      map((_) => UserActions.userDataCleared())
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserApiService,
    private router: Router) {
  }
}
