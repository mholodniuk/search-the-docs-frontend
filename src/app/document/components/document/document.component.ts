import { Component, HostListener, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DocumentDetailsDialogComponent } from "../document-details/document-details-dialog.component";
import { Document } from "../../model/document.model";
import { DocumentTagsDialogComponent } from "../document-tags/document-tags-dialog.component";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import * as DocumentActions from "../../store/document.actions";
import { DownloadService } from "../../service/download.service";

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  isActive = false;

  @Input() document: Document;

  constructor(
    private dialog: MatDialog,
    private downloadService: DownloadService,
    private store: Store<AppState>) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isActive = true;
  }

  @HostListener('mouseleave')
  onMouseLeaver() {
    this.isActive = false;
  }

  openDetails() {
    this.dialog.open(DocumentDetailsDialogComponent, {
      data: this.document
    });
  }

  get fileLocation() {
    return this.downloadService.getFileLocation(this.document);
  }

  openAssigningTags() {
    this.dialog.open(DocumentTagsDialogComponent, {
      data: this.document,
      width: "35%",
      minHeight: "200px",
    });
  }

  delete() {
    this.store.dispatch(DocumentActions.removeDocument({id: this.document.id}));
  }
}
