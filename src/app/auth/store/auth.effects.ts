import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../service/auth-service";
import * as AuthActions from './auth.actions';
import { catchError, map, of, switchMap, tap } from "rxjs";

@Injectable()
export class AuthEffects {
  authenticate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getToken),
      switchMap((action) => {
        return this.authService.authenticate(action).pipe(
          tap((authResponse) => this.authService.setAuthToken(authResponse.token)),
          map((response) => AuthActions.getTokenSuccess({token: response.token})),
          // map((actionSuccess) => UserActions.getUserData({id: actionSuccess.id!!})),
          catchError(() => of(AuthActions.getTokenFailure))
        )
      })
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
