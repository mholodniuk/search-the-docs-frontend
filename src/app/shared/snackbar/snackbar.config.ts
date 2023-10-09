import { MatSnackBarConfig } from "@angular/material/snack-bar";

export const INFO: MatSnackBarConfig = {
  verticalPosition: 'top',
  horizontalPosition: 'right',
  panelClass: 'snackbar-info'
};

export const ERROR: MatSnackBarConfig = {
  verticalPosition: 'bottom',
  horizontalPosition: 'right',
  panelClass: 'snackbar-error'
};

export const SUCCESS: MatSnackBarConfig = {
  verticalPosition: 'bottom',
  horizontalPosition: 'right',
  panelClass: 'sanckbar-success'
};
