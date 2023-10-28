import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CreateRoomRequest, Room, RoomCollection, SelectedRoom, TagCollection } from "../model/room.model";

@Injectable({
  providedIn: 'root'
})
export class RoomApiService {
  readonly usersUrl = `${environment.api}/users`;
  readonly roomsUrl = `${environment.api}/rooms`;

  constructor(private http: HttpClient) {
  }

  getRoomsByUserId(userId: number) {
    return this.http.get<RoomCollection>(`${this.usersUrl}/${userId}/rooms`);
  }

  getRoomDetails(roomId: number) {
    return this.http.get<SelectedRoom>(`${this.roomsUrl}/${roomId}`);
  }

  getTagsByRoomId(roomId: number) {
    return this.http.get<TagCollection>(`${this.roomsUrl}/${roomId}/tags`);
  }

  createRoom(createRoomRequest: CreateRoomRequest) {
    return this.http.post<Room>(`${this.roomsUrl}`, createRoomRequest);
  }
}
