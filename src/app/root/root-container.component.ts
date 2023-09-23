import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { RoomsDto, RoomService } from "../room.service";
import { select, Store } from "@ngrx/store";
import { AppState } from "../store/app.state";
import * as AuthActions from "../auth/store/auth.actions";
import { User } from "../user/user.model";
import { userSelector } from "../user/store/user.selector";

@Component({
  selector: 'root-container',
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.css']
})
export class RootContainerComponent implements OnInit {
  rooms$: Observable<RoomsDto>;
  user$: Observable<User | undefined>;

  constructor(private roomService: RoomService, private store: Store<AppState>) {
  }


  authenticate() {
    this.store.dispatch(AuthActions.getToken({username: "test", password: "secret"}));
  }

  ngOnInit(): void {
    this.rooms$ = this.roomService.getRooms(4);
    this.user$ = this.store.pipe(select(userSelector));
  }
}
