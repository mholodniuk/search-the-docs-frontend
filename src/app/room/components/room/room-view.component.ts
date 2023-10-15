import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { Observable } from "rxjs";
import { Room } from "../../model/room.model";
import { roomTagsSelector, selectedRoomSelector } from "../../store/room.selector";
import { Document } from "../../../document/model/document.model";
import { documentsLoadingSelector, documentsSelector } from "../../../document/store/document.selector";

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

  constructor(private store: Store<AppState>) {
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
    return this.windowWidth > 900 ? 6 : 4;
  }
}
