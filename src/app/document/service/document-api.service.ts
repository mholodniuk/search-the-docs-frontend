import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DocumentCollection, DocumentUploadedResponse, TagUpdateResponse } from "../model/document.model";
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

  updateDocumentTags(id: string, tags: string[]) {
    return this.http.patch<TagUpdateResponse>(`${this.documentsUrl}/${id}`, {tags: tags});
  }

  uploadDocument(file: File, roomId: number, userId: number) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('roomId', roomId.toString());
    formData.append('ownerId', userId.toString());
    return this.http.post<DocumentUploadedResponse>(`${this.documentsUrl}`, formData);
  }

  deleteDocument(id: string) {
    return this.http.delete(`${this.documentsUrl}/${id}`);
  }
}
