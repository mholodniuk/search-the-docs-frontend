import { Injectable } from '@angular/core';
import { Document } from "../model/document.model";

enum CONTENT_TYPE {
  DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  PDF = 'application/pdf'
}


@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  readonly filesUrl = 'http://localhost:8080/files/mock';

  getFileLocation(document: Document) {
    switch (document.storage) {
      case 'LOCAL':
        return this.buildFilePath(document.contentType as CONTENT_TYPE, document.id);
      default:
        throw Error('file storage not supported');
    }
  }

  buildFilePath(contentType: CONTENT_TYPE, id: string) {
    switch (contentType) {
      case CONTENT_TYPE.PDF:
        return `${this.filesUrl}/pdf/${id}`;
      case CONTENT_TYPE.DOCX:
        return `${this.filesUrl}/docx/${id}`;
      default:
        throw Error('content type not supported');
    }
  }
}
