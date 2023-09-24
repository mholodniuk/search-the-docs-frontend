import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from "../service/auth-service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class JwtTokenInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.getAuthToken().pipe(
      switchMap((token) => {
        if (token) {
          request = request.clone({
            setHeaders: {
              Authorization: 'Bearer ' + token.token
            }
          });
        }

        return next.handle(request).pipe(
          catchError((error) => {
            if (error instanceof HttpErrorResponse) {
              console.log(error.message);
            }
            return throwError(() => error);
          })
        );
      })
    );
  }
}
