import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Room {
  id: number
  name: string
  isPrivate: boolean
  createdAt: Date
  modifiedAt: Date
  documentCount: number
}

export interface RoomsDto {
  rooms: Room[]
  count: number
}

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private readonly apiUrl = `${environment.api}/users`;

  constructor(private http: HttpClient) {
  }

  getRooms(userId: number): Observable<RoomsDto> {
    return this.http.get<RoomsDto>(`${this.apiUrl}/${userId}/rooms`);
  }
}
