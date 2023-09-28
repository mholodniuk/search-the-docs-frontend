import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { roomsSelector } from "../../store/room.selector";
import { Room } from "../../model/room.model";

@Component({
  selector: 'app-room-collection',
  templateUrl: './room-collection.component.html',
  styleUrls: ['./room-collection.component.css']
})
export class RoomCollectionComponent implements OnInit {
  rooms$: Observable<Room[]>;

  @Input()
  extendDisplay: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.rooms$ = this.store.pipe(select(roomsSelector));
  }

}
