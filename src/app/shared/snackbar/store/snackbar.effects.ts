import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, delay } from 'rxjs/operators';

import * as SnackbarActions from './snackbar.actions';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SnackbarEffects {
  closeSnackbars$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SnackbarActions.closeSnackbar),
        tap(() => this.matSnackBar.dismiss())
      ),
    {dispatch: false}
  );

  showSnackbar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SnackbarActions.openSnackbar),
      map(action => action.config),
      tap(config => {
        this.matSnackBar.open(config.message, config.action, config.config)
      }),
      delay(environment.snackBarDelayTime),
      map(() => SnackbarActions.closeSnackbar())
    )
  );

  constructor(
    private actions$: Actions,
    private matSnackBar: MatSnackBar) {
  }
}
