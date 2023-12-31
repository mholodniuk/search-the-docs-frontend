import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, delay } from 'rxjs/operators';
import * as DocumentActions from '../../../document/store/document.actions';
import * as SnackbarActions from './snackbar.actions';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SUCCESS } from "../snackbar.config";
import * as RoomActions from "../../../room/store/room.actions";

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

  documentUploaded$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.documentUploaded),
      map((action) => {
        const config = {
          message: `Uploaded ${action.filename}`,
          action: 'Close',
          config: SUCCESS
        };
        return SnackbarActions.openSnackbar({config: config});
      })
    )
  );

  showUpdatedTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.documentTagsUpdated),
      map((action) => {
        const config = {
          message: `Updated tags`,
          action: 'Close',
          config: SUCCESS
        };
        return SnackbarActions.openSnackbar({config: config});
      })
    )
  );

  roomAccessGranted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.roomAccessGranted),
      map((action) => {
        const config = {
          message: `Shared room`,
          action: 'Close',
          config: SUCCESS
        };
        return SnackbarActions.openSnackbar({config: config});
      })
    )
  );

  documentRemoved$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.documentRemoved),
      map(() => {
        const config = {
          message: `Document deleted`,
          action: 'Close',
          config: SUCCESS
        };
        return SnackbarActions.openSnackbar({config: config});
      })
    )
  );

  constructor(
    private actions$: Actions,
    private matSnackBar: MatSnackBar) {
  }
}
