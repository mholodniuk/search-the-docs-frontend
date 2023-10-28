import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { roomsSelector } from "../../store/room.selector";
import { Room } from "../../model/room.model";
import * as RoomActions from '../../store/room.actions';
import { userLoggedInSelector } from "../../../auth/store/user.selector";
import { MatDialog } from "@angular/material/dialog";
import { CreateRoomDialogComponent } from "../create-room/create-room-dialog.component";
import { ShareRoomDialogComponent } from "../share-room/share-room-dialog.component";
import {
  UploadDocumentDialogComponent
} from "../../../document/components/upload-document/upload-document-dialog.component";
import { Router } from "@angular/router";


@Component({
  selector: 'app-room-collection',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms$: Observable<Room[]>;
  userLoggedIn$: Observable<boolean>;

  @Input()
  extendDisplay: boolean = false;

  constructor(
    private store: Store<AppState>,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.rooms$ = this.store.pipe(select(roomsSelector));
    this.userLoggedIn$ = this.store.pipe(select(userLoggedInSelector));
  }

  selectRoom(id: number): void {
    this.store.dispatch(RoomActions.selectRoom({id: id}));
  }

  openCreateRoomDialog(): void {
    this.dialog.open(CreateRoomDialogComponent);
  }

  openUploadDocumentDialog() {
    this.dialog.open(UploadDocumentDialogComponent, {
      width: "20%",
      minHeight: "4rem"
    });
  }

  openShareRoomDialog(): void {
    this.dialog.open(ShareRoomDialogComponent);
  }

  openFullTextSearch(): void {
    void this.router.navigate(['/search']);
  }

  documentCount(room: Room): string {
    return `${room.documentCount} ${room.documentCount === 1 ? 'document' : 'documents'}`;
  }
}
