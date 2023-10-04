import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";

@Component({
  selector: 'app-create-room-dialog',
  templateUrl: './create-room-dialog.component.html',
  styleUrls: ['./create-room-dialog.component.css']
})
export class CreateRoomDialogComponent {
  form = this.fb.group({
    name: ['', [Validators.required]],
    isPrivate: [true, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>) {
  }

  submit() {
    if (this.form.valid) {
      console.log("submitted");
    }
  }
}
