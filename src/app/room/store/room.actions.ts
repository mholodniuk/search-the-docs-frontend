import { createAction, props } from "@ngrx/store";
import { Room } from "../model/room.model";


export const loadAvailableRooms = createAction(
  '[Room] Load Available Rooms'
);

export const clearAvailableRooms = createAction(
  '[Room] Clear Available Rooms'
);

export const availableRoomsLoaded = createAction(
  '[Room] Available Rooms Loaded',
  props<{ rooms: Room[], count: number }>()
);
