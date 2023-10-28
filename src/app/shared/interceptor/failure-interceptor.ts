import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import * as SnackbarActions from "../../shared/snackbar/store/snackbar.actions";
import { ERROR } from "../snackbar/snackbar.config";

@Injectable({
  providedIn: 'root',
})
export class FailureInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<AppState>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          const config = {
            message: `Failed to execute request`,
            action: 'Acknowledge',
            config: ERROR
          };
          this.store.dispatch(SnackbarActions.openSnackbar({config: config}));
        }
        return throwError(() => error);
      })
    );
  }
}
