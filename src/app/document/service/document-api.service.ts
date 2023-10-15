import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DocumentCollection } from "../model/document.model";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentApiService {
  readonly documentsUrl = `${environment.api}/documents`;
  readonly roomsUrl = `${environment.api}/rooms`;
  readonly filesUrl = `${environment.api}/files/mock`;

  constructor(private http: HttpClient) {
  }

  getDocumentsFromRoom(roomId: number) {
    return this.http.get<DocumentCollection>(`${this.roomsUrl}/${roomId}/documents`);
  }

  getDocumentThumbnail(id: string): Observable<Blob> {
    return this.http.get(`${this.filesUrl}/${id}/thumbnail`, {responseType: 'blob'});
  }
}
