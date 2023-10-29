import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../store/app.state";
import { filter, map, Observable } from "rxjs";
import { SelectedRoom } from "../../model/room.model";
import { selectedRoomSelector } from "../../store/room.selector";
import { isDefined } from "../../../shared/utils/utils.functions";
import { userSelector } from "../../../auth/store/user.selector";
import * as RoomActions from "../../store/room.actions";

@Component({
  selector: 'app-room-access-list',
  templateUrl: './room-access-list.component.html',
  styleUrls: ['./room-access-list.component.css']
})
export class RoomAccessListDialogComponent implements OnInit {
  room$: Observable<SelectedRoom>;
  currentUser$: Observable<string>;
  columnsToDisplay = ['user', 'access', 'validTo', 'name', 'remove'];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.room$ = this.store.pipe(select(selectedRoomSelector), filter(isDefined));
    this.currentUser$ = this.store.pipe(select(userSelector), map(user => user!!.username));
  }

  revokeRoomAccess(roomId: number, userId: number) {
    this.store.dispatch(RoomActions.revokeRoomAccess({roomId: roomId, userId: userId}));
  }
}
