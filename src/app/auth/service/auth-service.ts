import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthRequest, AuthResponse } from "../model/auth.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class AuthService {
  private readonly TOKEN_KEY = "search.the.docs.token";
  private readonly apiUrl = `${environment.api}/users`;

  constructor(private http: HttpClient) {
  }

  getAuthToken(): Observable<string | null> {
    return of(localStorage.getItem(this.TOKEN_KEY));
  }

  authenticate(request: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/authenticate`, request);
  }
}
