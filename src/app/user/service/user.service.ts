import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { User } from "../user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly url = `${environment.api}/users`;

  constructor(private http: HttpClient) {
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${userId}`);
  }
}
