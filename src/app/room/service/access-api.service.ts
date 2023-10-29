import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AccessKey, GrantAccessRequest, RevokeAccessRequest } from "../model/access.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AccessApiService {
  readonly roomsUrl = `${environment.api}/rooms`;

  constructor(private http: HttpClient) {
  }

  grantAccess(grantAccessRequest: GrantAccessRequest): Observable<AccessKey> {
    const {roomId, ...request} = grantAccessRequest;
    return this.http.post<AccessKey>(`${this.roomsUrl}/${roomId}/access`, request);
  }

  revokeAccess(revokeAccessRequest: RevokeAccessRequest) {
    return this.http.delete(`${this.roomsUrl}/${revokeAccessRequest.roomId}/access/${revokeAccessRequest.userId}`);
  }
}
