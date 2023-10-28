import { Injectable } from '@angular/core';
import { Document } from "../model/document.model";

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  readonly filesUrl = 'http://localhost:8080/files/mock';

  getFileLocation(document: Document) {
    switch (document.storage) {
      case 'LOCAL':
        return this.buildFilePath(document.contentType, document.id);
      default:
        throw Error('file storage not supported');
    }
  }

  buildFilePath(contentType: string, id: string) {
    switch (contentType) {
      case 'application/pdf':
        return `${this.filesUrl}/pdf/${id}`;
      default:
        throw Error('content type not supported');
    }
  }
}
