import { Component, HostListener, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DocumentDetailsDialogComponent } from "../document-details/document-details-dialog.component";
import { Document } from "../../model/document.model";
import { DocumentTagsDialogComponent } from "../document-tags/document-tags-dialog.component";

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
  isActive = false;

  @Input() document: Document;

  constructor(private dialog: MatDialog) {
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

  openAssigningTags() {
    this.dialog.open(DocumentTagsDialogComponent, {
      data: this.document,
      width: "35%",
      minHeight: "200px",
    });
  }
}
