/* eslint-disable no-case-declarations */
import { FETCH_ROOM, ADD_ROOM, DELETE_ROOM, EDIT_ROOM } from '../../constants/roomCategory';
import { convertArrayToObject } from '../../utils/helper/convert';

import { State, ActionRooms } from '../../interface/roomCategory';

//Init room category
export const initRooms: State = {
  byId: {},
  allIds: []
};

//Reducer
const reducer = (state: State, action: ActionRooms) => {
  switch (action.type) {
    case FETCH_ROOM:
      const rooms = action.payload.rooms || [];
      const newById = convertArrayToObject(rooms);
      const newIds = rooms.map((room) => room.id);

      return {
        byId: newById,
        allIds: newIds
      };

    case ADD_ROOM:
      const newRoom = action.payload.room!;
      state.byId[newRoom.id] = newRoom;

      return {
        byId: {
          ...state.byId
        },
        allIds: [...state.allIds, newRoom.id]
      };

    case DELETE_ROOM:
      const roomId = action.payload.id;
      const newArr = state.allIds.filter((id) => id !== roomId);

      return {
        byId: {
          ...state.byId
        },
        allIds: [...newArr]
      };

    case EDIT_ROOM:
      const roomEdit = action.payload.room!;
      state.byId[roomEdit.id] = roomEdit;

      return {
        byId: {
          ...state.byId
        },
        allIds: [...state.allIds]
      };

    default:
      return state;
  }
};

export default reducer;
