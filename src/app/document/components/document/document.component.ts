import { Component, HostListener, Input } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { DocumentDetailsComponent } from "../document-details/document-details.component";
import { Document } from "../../model/document.model";

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
    this.dialog.open(DocumentDetailsComponent, {
      data: this.document
    });
  }
}
