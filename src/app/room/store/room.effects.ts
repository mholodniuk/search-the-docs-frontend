import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RoomService } from "../service/room.service";
import * as UserActions from '../../auth/store/user.actions';
import { filter, map, switchMap, withLatestFrom } from "rxjs";
import * as RoomActions from './room.actions';
import { select, Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { userSelector } from "../../auth/store/user.selector";
import { isDefined } from "../../shared/utils/utils.functions";

@Injectable()
export class RoomEffects {

  getRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.userDataLoaded),
      map(() => RoomActions.loadAvailableRooms())
    )
  );

  cleanRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.logOut),
      map(() => RoomActions.clearAvailableRooms())
    )
  );

  loadRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.loadAvailableRooms),
      withLatestFrom(this.store.pipe(
        select(userSelector),
        filter(isDefined),
        map((user) => user.id)
      )),
      switchMap(([_, userId]) => {
        return this.roomService.getRoomsByUserId(userId).pipe(
          map((response) => RoomActions.availableRoomsLoaded({rooms: response.rooms, count: response.count}))
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private roomService: RoomService) {
  }
}
