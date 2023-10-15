import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RoomState } from "./room.state";

export const selectRoomState = createFeatureSelector<RoomState>('room');

export const roomsSelector = createSelector(selectRoomState, (state) => {
  return state.rooms;
});

export const publicRoomsSelector = createSelector(selectRoomState, (state) => {
  return state.rooms.filter(room => (!room.isPrivate && room.isOwner));
});

export const selectedRoomSelector = createSelector(selectRoomState, (state) => {
  return state.selectedRoom;
});

export const roomTagsSelector = createSelector(selectRoomState, (state) => {
  return state.selectedRoom?.tags!!;
});
