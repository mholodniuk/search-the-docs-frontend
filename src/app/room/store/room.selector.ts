import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RoomState } from "./room.state";

export const selectRoomState = createFeatureSelector<RoomState>('room');

export const roomsSelector = createSelector(selectRoomState, (state) => {
  return state.rooms;
});
