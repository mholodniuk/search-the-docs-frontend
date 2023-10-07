import { createReducer, on } from "@ngrx/store";
import { RoomState } from "./room.state";
import * as RoomActions from './room.actions';


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
      selectedRoom: state.rooms.find((room) => room.id === action.id)
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
      rooms: [...state.rooms, {...action.room, isOwner: true}],
      count: state.count + 1,
      creating: false
    }
  }),

  on(RoomActions.roomCreateFailure, state => {
    return {
      ...state,
      creating: false
    }
  })
);
