import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { filter, map, Observable } from "rxjs";
import { Room } from "../../model/room.model";
import { roomTagsSelector, selectedRoomSelector } from "../../store/room.selector";
import { Document } from "../../../document/model/document.model";
import { documentsLoadingSelector, documentsSelector } from "../../../document/store/document.selector";
import { isDefined } from "../../../shared/utils/utils.functions";
import { RoomAccessListDialogComponent } from "../room-access-list/room-access-list.component";
import { MatDialog } from "@angular/material/dialog";
import * as RoomActions from "../../store/room.actions";

@Component({
  selector: 'selected-room',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {
  selectedRoom$: Observable<Room | undefined>;
  documents$: Observable<Document[]>;
  loading$: Observable<boolean>;
  tags$: Observable<string[]>;

  private windowWidth: number;

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.selectedRoom$ = this.store.pipe(select(selectedRoomSelector));
    this.documents$ = this.store.pipe(select(documentsSelector));
    this.loading$ = this.store.pipe(select(documentsLoadingSelector));
    this.tags$ = this.store.pipe(select(roomTagsSelector));
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.windowWidth = window.innerWidth;
  }

  get columns(): number {
    if (this.windowWidth > 1100)
      return 6;
    if (this.windowWidth <= 1100 && this.windowWidth > 750)
      return 4;
    return 2;
  }

  get tagsNotEmpty() {
    return this.tags$.pipe(filter(isDefined), map(tags => tags.length >= 1));
  }

  openCheckAccess() {
    this.dialog.open(RoomAccessListDialogComponent);
  }

  refresh() {
    this.store.dispatch(RoomActions.refreshSelectedRoom());
  }
}
