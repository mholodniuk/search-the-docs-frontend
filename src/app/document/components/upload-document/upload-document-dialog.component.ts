import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Room } from "../../../room/model/room.model";
import { select, Store } from "@ngrx/store";
import { roomsSelector } from "../../../room/store/room.selector";
import { AppState } from "../../../store/app.state";
import * as DocumentActions from "../../store/document.actions";

@Component({
  selector: 'upload-document-dialog',
  templateUrl: './upload-document-dialog.component.html',
  styleUrls: ['./upload-document-dialog.component.css']
})
export class UploadDocumentDialogComponent {
  fileName: string;
  imageURL: string;
  reader: FileReader = new FileReader();
  file: File;
  rooms$: Observable<Room[]> = this.store.pipe(select(roomsSelector));

  form = this.fb.group({
    roomId: [0, Validators.min(1)],
    file: [false, Validators.requiredTrue]
  });

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder) {
  }

  onFileSelected(event: Event) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    if (!target.files) return;
    const file: File = target.files[0];

    if (file) {
      this.fileName = file.name;
      this.saveImageFromBlob(file);
    }
  }

  saveImageFromBlob(file: File): void {
    this.reader.onload = () => {
      this.imageURL = this.reader.result as string;
      this.file = file;
    }
    this.reader.readAsDataURL(file);
    this.form.patchValue({file: true});
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(DocumentActions.uploadDocument({
        file: this.file,
        roomId: this.form.value.roomId!!
      }))
    }
  }
}
