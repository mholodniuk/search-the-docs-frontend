import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable()
export class AuthService {
  private TOKEN_KEY = "search.the.docs.token";

  getAuthToken(): Observable<string | null> {
    return of(localStorage.getItem(this.TOKEN_KEY));
  }
}
