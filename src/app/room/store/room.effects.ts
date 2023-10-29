import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { RoomApiService } from "../service/room-api.service";
import * as UserActions from '../../auth/store/user.actions';
import { catchError, filter, map, of, switchMap, withLatestFrom } from "rxjs";
import * as RoomActions from './room.actions';
import { select, Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { userSelector } from "../../auth/store/user.selector";
import { isDefined } from "../../shared/utils/utils.functions";
import { HttpErrorResponse } from "@angular/common/http";
import { InvalidResourceUpdateException } from "../../shared/types/errors";
import { AccessApiService } from "../service/access-api.service";
import * as DocumentActions from "../../document/store/document.actions";
import { selectedRoomSelector } from "./room.selector";

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
        map(user => user.id)
      )),
      switchMap(([_, userId]) => {
        return this.roomService.getRoomsByUserId(userId).pipe(
          map((response) => RoomActions.availableRoomsLoaded({rooms: response.rooms, count: response.count}))
        )
      })
    )
  );

  createRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.createRoom),
      withLatestFrom(this.store.pipe(
        select(userSelector),
        filter(isDefined),
        map(user => user.id)
      )),
      switchMap(([action, userId]) => {
        return this.roomService.createRoom({name: action.name, isPrivate: action.isPrivate, ownerId: userId}).pipe(
          map(response => RoomActions.roomCreated({room: response})),
          catchError((error: HttpErrorResponse) =>
            of(RoomActions.roomCreateFailure({message: (error.error as InvalidResourceUpdateException).errors}))
          )
        )
      })
    )
  );

  grantRoomAccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.grantRoomAccess),
      switchMap((action) => {
        return this.accessService.grantAccess(action).pipe(
          map(_ => RoomActions.roomAccessGranted()),
          catchError((error: HttpErrorResponse) =>
            of(RoomActions.grantAccessFailure({message: error.error.message}))
          )
        )
      }),
    )
  );

  revokeRoomAccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.revokeRoomAccess),
      switchMap((action) => {
        return this.accessService.revokeAccess(action).pipe(
          map(_ => RoomActions.roomAccessRevoked({userId: action.userId}))
        )
      })
    )
  );

  startLoadRoomData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.selectRoom),
      map((action) => RoomActions.loadRoomData({roomId: action.id}))
    )
  );

  loadRoomData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.loadRoomData),
      switchMap((action) => {
        return this.roomService.getRoomDetails(action.roomId).pipe(
          map((response) => RoomActions.roomDataLoaded({room: response}))
        )
      })
    )
  );

  refreshSelectedRoom = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.refreshSelectedRoom),
      concatLatestFrom(() =>
        this.store.pipe(
          select(selectedRoomSelector),
          filter(isDefined),
          map(room => room.id)
        )
      ),
      map(([, roomId]) => RoomActions.selectRoom({id: roomId}))
    )
  );

  loadTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.loadTags),
      switchMap((action) => {
        return this.roomService.getTagsByRoomId(action.roomId).pipe(
          map((response) => RoomActions.tagsLoaded({tags: response.tags}))
        )
      })
    )
  );

  documentTagsUpdated = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.documentTagsUpdated),
      withLatestFrom(this.store.pipe(
        select(selectedRoomSelector),
        filter(isDefined),
        map(room => room.id)
      )),
      map(([, roomId]) => RoomActions.loadTags({roomId: roomId}))
    )
  );

  documentUpload$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.documentUploaded),
      map((action) => RoomActions.incrementDocumentsInRoom({name: action.room}))
    )
  );

  documentDelete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.documentRemoved),
      map((action) => RoomActions.decrementDocumentsInRoom({name: action.id}))
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private roomService: RoomApiService,
    private accessService: AccessApiService) {
  }
}
