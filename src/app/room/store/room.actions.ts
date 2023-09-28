import { createAction, props } from "@ngrx/store";
import { Room } from "../model/room.model";


export const loadAvailableRooms = createAction(
  '[Auth] Load Available Rooms'
);

export const availableRoomsLoaded = createAction(
  '[Auth] Available Rooms Loaded',
  props<{ rooms: Room[], count: number }>()
);
