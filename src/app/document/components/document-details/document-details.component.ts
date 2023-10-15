import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Document } from "../../model/document.model";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DocumentApiService } from "../../service/document-api.service";
import { Subject, takeUntil } from "rxjs";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  image: SafeResourceUrl;

  constructor(
    @Inject(MAT_DIALOG_DATA) public document: Document,
    private documentService: DocumentApiService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.documentService.getDocumentThumbnail(this.document.id).pipe(takeUntil(this.destroy$)).subscribe(file => {
      const objectUrl = URL.createObjectURL(file);
      this.image = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
