import { createAction, props } from "@ngrx/store";
import { Room } from "../model/room.model";
import { ErrorMessage } from "../../shared/types/errors";
import { GrantAccessRequest } from "../model/access.model";

const ROOM_ACTION_TAG = '[Room]';

export const loadAvailableRooms = createAction(
  `${ROOM_ACTION_TAG} Load Available Rooms`
);

export const clearAvailableRooms = createAction(
  `${ROOM_ACTION_TAG} Clear Available Rooms`
);

export const availableRoomsLoaded = createAction(
  `${ROOM_ACTION_TAG} Available Rooms Loaded`,
  props<{ rooms: Room[], count: number }>()
);

export const loadTags = createAction(
  `${ROOM_ACTION_TAG} Load Available Tags`,
  props<{ roomId: number }>()
);

export const tagsLoaded = createAction(
  `${ROOM_ACTION_TAG} Available Tags Loaded`,
  props<{ tags: string[] }>()
);

export const selectRoom = createAction(
  `${ROOM_ACTION_TAG} Select Room`,
  props<{ id: number }>()
);

export const createRoom = createAction(
  `${ROOM_ACTION_TAG} Create Room`,
  props<{ name: string, isPrivate: boolean }>()
);

export const roomCreated = createAction(
  `${ROOM_ACTION_TAG} Room Created`,
  props<{ room: Room }>()
);

export const roomCreateFailure = createAction(
  `${ROOM_ACTION_TAG} Room Create Failure`,
  props<{ message: ErrorMessage[] }>()
);

export const grantRoomAccess = createAction(
  `${ROOM_ACTION_TAG} Grant Room Access`,
  props<GrantAccessRequest>()
);

export const roomAccessGranted = createAction(
  `${ROOM_ACTION_TAG} Room Access Granted`
);

export const grantAccessFailure = createAction(
  `${ROOM_ACTION_TAG} Grant Room Access Failed`,
  props<{ message: string }>()
);

export const incrementDocumentsInRoom = createAction(
  `${ROOM_ACTION_TAG} Increment Documents in Room`,
  props<{ name: string }>()
);
