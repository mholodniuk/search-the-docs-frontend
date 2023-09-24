import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../service/auth-service";
import * as AuthActions from './auth.actions';
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  authenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.retrieveAuthToken),
      switchMap((action) => {
        return this.authService.authenticate({username: action.username, password: action.password}).pipe(
          tap((authResponse) => this.authService.setAuthToken(authResponse)),
          map((token) => AuthActions.updateAuthToken(token)),
          catchError(() => of(AuthActions.retrieveAuthTokenFailure()))
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
              return AuthActions.updateAuthToken(token);
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
        ofType(AuthActions.updateAuthToken),
        tap(() => void this.router.navigate(['/']))
      ),
    {dispatch: false}
  );

  authenticationFailureCleanup$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.retrieveAuthTokenFailure),
        tap(() => this.authService.deleteAuthToken())
      ),
    {dispatch: false}
  );

  logOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logOut),
        tap(() => {
          this.authService.deleteAuthToken();
          void this.router.navigate(['/']);
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {
  }
}
