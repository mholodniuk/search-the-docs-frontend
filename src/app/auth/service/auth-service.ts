import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private TOKEN_KEY = "search.the.docs.token";

  get authToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  set authToken(token: string | null) {
    if (token) {
      localStorage.setItem(this.TOKEN_KEY, token);
    }
  }
}
