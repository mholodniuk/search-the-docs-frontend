import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { RoomCollection } from "../model/room.model";

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  readonly usersUrl = `${environment.api}/users`;
  readonly roomsUrl = `${environment.api}/rooms`;

  constructor(private http: HttpClient) {
  }

  getRoomsByUserId(userId: number) {
    return this.http.get<RoomCollection>(`${this.usersUrl}/${userId}/rooms`);
  }

}
