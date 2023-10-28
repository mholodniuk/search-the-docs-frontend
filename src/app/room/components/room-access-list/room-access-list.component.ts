import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { filter, Observable } from "rxjs";
import { SelectedRoom } from "../../model/room.model";
import { selectedRoomSelector } from "../../store/room.selector";
import { isDefined } from "../../../shared/utils/utils.functions";

@Component({
  selector: 'app-room-access-list',
  templateUrl: './room-access-list.component.html',
  styleUrls: ['./room-access-list.component.css']
})
export class RoomAccessListDialogComponent implements OnInit {
  room$: Observable<SelectedRoom>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.room$ = this.store.pipe(select(selectedRoomSelector), filter(isDefined));
  }
}
