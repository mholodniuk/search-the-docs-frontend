import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AuthRequest, AuthResponse } from "../model/auth.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthService {
  readonly TOKEN_KEY = "search.the.docs";
  readonly apiUrl = `${environment.api}/users`;

  constructor(private http: HttpClient) {
  }

  getAuthToken(): Observable<AuthResponse | null> {
    const auth = localStorage.getItem(this.TOKEN_KEY);
    if (auth) {
      return of(JSON.parse(auth));
    }
    return of(null);
  }

  setAuthToken(token: AuthResponse) {
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  deleteAuthToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  authenticate(request: AuthRequest): Observable<AuthResponse> {
    const params = new HttpParams().append("include", "id");
    return this.http.post<AuthResponse>(`${this.apiUrl}/authenticate`, request, {params: params});
  }
}
