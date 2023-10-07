import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import * as RoomActions from "../../store/room.actions";
import { Observable } from "rxjs";
import { Room } from "../../model/room.model";
import { publicRoomsSelector } from "../../store/room.selector";
import { GrantAccessRequest } from "../../model/access.model";

@Component({
  selector: 'app-share-room-dialog',
  templateUrl: './share-room-dialog.component.html',
  styleUrls: ['./share-room-dialog.component.css']
})
export class ShareRoomDialogComponent {
  form = this.fb.group({
    roomId: [0, Validators.required],
    userToInvite: ['', [Validators.required]],
    keyName: [''],
    accessRight: ['VIEW', Validators.required],
    validTo: ['']
  });

  publicRooms$: Observable<Room[]> = this.store.pipe(select(publicRoomsSelector));

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>) {
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(RoomActions.grantRoomAccess(this.form.value as GrantAccessRequest))
    }
  }

  pastDateFilter(d: Date | null): boolean {
    if (d === null) return false;
    return d >= new Date();
  }

  onDateSelected(date: Date | null) {
    if (date === null) {
      date = new Date();
    }
    this.form.controls.validTo.setValue(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
  }
}
