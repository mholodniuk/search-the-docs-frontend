import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { Observable } from "rxjs";
import { Room } from "../../model/room.model";
import { selectedRoomSelector } from "../../store/room.selector";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  selectedRoom$: Observable<Room | undefined>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.selectedRoom$ = this.store.pipe(select(selectedRoomSelector));
  }
}
