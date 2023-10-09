import { createReducer, on } from '@ngrx/store';
import * as SnackbarActions from './snackbar.actions'


export interface SnackbarState {
  showing: boolean;
}

export const initialState: SnackbarState = {
  showing: false
};

export const SnackbarReducer = createReducer(
  initialState,

  on(SnackbarActions.openSnackbar, state => {
    return {...state, showing: true};
  }),

  on(SnackbarActions.closeSnackbar, state => {
    return {...state, showing: false};
  })
);
