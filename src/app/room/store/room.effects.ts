import { Injectable, Input } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RoomService } from "../service/room.service";
import * as UserActions from '../../auth/store/user.actions';
import { map, switchMap, withLatestFrom } from "rxjs";
import * as RoomActions from './room.actions';

@Injectable()
export class RoomEffects {

  getRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.userDataLoaded),
      switchMap((action,) => {
        return this.roomService.getRoomsByUserId(action.user.id).pipe(
          map((response) => RoomActions.availableRoomsLoaded({rooms: response.rooms, count: response.count}))
        )
      })
    )
  );

  constructor(private actions$: Actions,
              private roomService: RoomService) {
  }
}
