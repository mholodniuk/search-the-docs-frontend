import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { createAction, props } from '@ngrx/store';

export const openSnackbar = createAction(
  '[Snackbar] Open Snackbars',
  props<{
    config: {
      message: string;
      action?: string;
      config?: MatSnackBarConfig;
    };
  }>()
);

export const closeSnackbar = createAction('[Snackbar] Close Snackbars');
