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
        return this.authService.authenticate(action).pipe(
          tap((authResponse) => this.authService.setAuthToken(authResponse.token)),
          map((response) => AuthActions.updateAuthToken(response)),
          catchError(() => of(AuthActions.retrieveAuthTokenFailure))
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

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {
  }
}
