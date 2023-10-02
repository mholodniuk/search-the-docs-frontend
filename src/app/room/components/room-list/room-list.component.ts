import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { roomsSelector } from "../../store/room.selector";
import { Room } from "../../model/room.model";
import * as RoomActions from '../../store/room.actions';


@Component({
  selector: 'app-room-collection',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms$: Observable<Room[]>;

  @Input()
  extendDisplay: boolean = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.rooms$ = this.store.pipe(select(roomsSelector));
  }

  selectRoom(id: number): void {
    this.store.dispatch(RoomActions.selectRoom({id: id}));
  }

  documentCount(room: Room): string {
    return `${room.documentCount} ${room.documentCount === 1 ? 'document' : 'documents'}`;
  }
}
