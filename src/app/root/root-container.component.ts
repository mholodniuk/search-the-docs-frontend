import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { RoomsDto, RoomService } from "../room.service";
import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import * as AuthActions from "../auth/store/auth.actions";

@Component({
  selector: 'root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.css']
})
export class RootContainerComponent implements OnInit {
  rooms$: Observable<RoomsDto>;

  constructor(private roomService: RoomService, private store: Store<AppState>) {
  }


  authenticate() {
    this.store.dispatch(AuthActions.getToken());
  }

  ngOnInit(): void {
    this.rooms$ = this.roomService.getRooms(4);
  }
}
