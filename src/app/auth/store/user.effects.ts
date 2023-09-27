import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../service/auth-service";
import * as AuthActions from './user.actions';
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";
import { UserService } from "../../user/service/user.service";

@Injectable()
export class UserEffects {
  authenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadAuthToken),
      switchMap((action) => {
        return this.authService.authenticate({username: action.username, password: action.password}).pipe(
          tap((authResponse) => this.authService.setAuthToken(authResponse)),
          map((token) => AuthActions.authTokenLoaded(token)),
          catchError((error: HttpErrorResponse) => of(AuthActions.authTokenFailure({error: error.error.message})))
        )
      })
    )
  );

  autoAuthenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.tryAutoAuthenticate),
      switchMap(() => {
        return this.authService.getAuthToken().pipe(
          map((token) => {
            if (token) {
              return AuthActions.authTokenLoaded(token);
            }
            return AuthActions.autoAuthenticateFailure();
          }),
          catchError(() => of(AuthActions.autoAuthenticateFailure()))
        )
      })
    )
  );

  authenticationRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authTokenLoaded),
        tap(() => void this.router.navigate(['/']))
      ),
    {dispatch: false}
  );

  authenticationFailureCleanup$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authTokenFailure),
        tap(() => this.authService.deleteAuthToken())
      ),
    {dispatch: false}
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logOut),
        map(() => {
          this.authService.deleteAuthToken();
          void this.router.navigate(['/']);
          return AuthActions.clearUserData()
        }),
      )
  );

  getUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AuthActions.loadUserData,
        AuthActions.authTokenLoaded
      ),
      switchMap((action) =>
        this.userService.getUser(action.id).pipe(
          map((user) => AuthActions.userDataLoaded({user: user})),
          catchError(() => of(AuthActions.loadDataFailure()))
        )
      )
    )
  );

  clearUserData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.clearUserData),
      map((_) => AuthActions.userDataCleared())
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService,
    private router: Router) {
  }
}
