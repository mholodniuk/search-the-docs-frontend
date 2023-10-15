import { Component, Inject, inject } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Document } from "../../model/document.model";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import * as DocumentActions from '../../store/document.actions';


interface Tag {
  value: string;
}

@Component({
  selector: 'document-tags',
  templateUrl: './document-tags-dialog.component.html',
  styleUrls: ['./document-tags-dialog.component.css']
})
export class DocumentTagsDialogComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = this.documentTags;
  announcer = inject(LiveAnnouncer);

  form: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public document: Document,
    private store: Store<AppState>) {
  }

  get documentTags() {
    return this.document.tags.map(tag => ({value: tag}));
  }

  get updatedTags() {
    return this.tags.map(tag => tag.value);
  }

  submit() {
    this.store.dispatch(DocumentActions.updateDocumentTags({documentId: this.document.id, tags: this.updatedTags}))
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push({value: value});
    }

    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);

      this.announcer.announce(`Removed ${tag}`);
    }
  }

  edit(tag: Tag, event: MatChipEditedEvent) {
    const value = event.value.trim();
    if (!value) {
      this.remove(tag);
      return;
    }

    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index].value = value;
    }
  }
}
