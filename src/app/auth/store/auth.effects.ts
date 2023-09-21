import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../service/auth-service";
import * as AuthActions from './auth.actions';
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class AuthEffects {
  authenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getToken),
      switchMap(() => {
        return this.authService.authenticate({username: "test", password: "secret"}).pipe(
          map((response) => AuthActions.getTokenSuccess({token: response.token})),
          catchError(() => of(AuthActions.getTokenFailure))
        )
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
