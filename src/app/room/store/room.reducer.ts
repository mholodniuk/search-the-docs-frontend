import { createReducer, on } from "@ngrx/store";
import { RoomState } from "./room.state";
import * as RoomActions from './room.actions';


const initialState: RoomState = {
  rooms: [],
  count: 0
};

export const RoomReducer = createReducer(
  initialState,

  on(RoomActions.availableRoomsLoaded, (state, action) => {
    return {
      ...state,
      rooms: action.rooms,
      count: action.count
    }
  })
);
