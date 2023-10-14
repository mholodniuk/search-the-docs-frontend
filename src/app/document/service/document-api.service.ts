import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DocumentCollection } from "../model/document.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DocumentApiService {
  readonly documentsUrl = `${environment.api}/documents`;
  readonly roomsUrl = `${environment.api}/rooms`;

  constructor(private http: HttpClient) {
  }

  getDocumentsFromRoom(roomId: number) {
    return this.http.get<DocumentCollection>(`${this.roomsUrl}/${roomId}/documents`);
  }
}
