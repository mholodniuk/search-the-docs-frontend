import { createReducer, on } from "@ngrx/store";
import { RoomState } from "./room.state";
import * as RoomActions from './room.actions';
import { SelectedRoom } from "../model/room.model";


const initialState: RoomState = {
  selectedRoom: undefined,
  rooms: [],
  count: 0,
  creating: false
};

export const RoomReducer = createReducer(
  initialState,

  on(RoomActions.availableRoomsLoaded, (state, action) => {
    return {
      ...state,
      rooms: action.rooms,
      count: action.count
    }
  }),

  on(RoomActions.clearAvailableRooms, state => {
    return {
      ...state,
      rooms: [],
      count: 0
    }
  }),

  on(RoomActions.selectRoom, (state, action) => {
    return {
      ...state,
      selectedRoom: state.rooms.find((room) => room.id === action.id) as SelectedRoom
    }
  }),

  on(RoomActions.createRoom, state => {
    return {
      ...state,
      creating: true
    }
  }),

  on(RoomActions.roomCreated, (state, action) => {
    return {
      ...state,
      rooms: [...state.rooms, {...action.room, isOwner: true, documentCount: 0}],
      count: state.count + 1,
      creating: false
    }
  }),

  on(RoomActions.roomCreateFailure, state => {
    return {
      ...state,
      creating: false
    }
  }),

  on(RoomActions.roomDataLoaded, (state, action) => {
    return {
      ...state,
      selectedRoom: action.room
    }
  }),

  on(RoomActions.tagsLoaded, (state, action) => {
    return {
      ...state,
      selectedRoom: {
        ...state.selectedRoom,
        tags: action.tags
      } as SelectedRoom
    }
  }),

  on(RoomActions.incrementDocumentsInRoom, (state, action) => {
    const updatedRooms = [...state.rooms.map(room => room.name === action.name ? {
      ...room,
      documentCount: room.documentCount + 1
    } : room)];

    return {
      ...state,
      rooms: updatedRooms,
    }
  }),

  on(RoomActions.decrementDocumentsInRoom, (state, action) => {
    const updatedRooms = [...state.rooms.map(room => room.name === state.selectedRoom?.name ? {
      ...room,
      documentCount: room.documentCount - 1
    } : room)];

    return {
      ...state,
      rooms: updatedRooms,
    }
  })
);
