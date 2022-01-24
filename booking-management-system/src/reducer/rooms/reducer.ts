/* eslint-disable no-case-declarations */
import { FETCH_ROOM, ADD_ROOM, DELETE_ROOM } from '../../constants/roomCategory';
import { convertArrayToObject } from '../../utils/helper/room';

import { InitRooms, ActionRooms } from '../../interface/roomCategory';

type Room = {
  id: number;
};

//Init room category
export const initRooms = {
  byId: {},
  allIds: []
};

//Reducer
const reducer = (state: InitRooms, action: ActionRooms) => {
  switch (action.type) {
    case FETCH_ROOM:
      const rooms = action.payload;
      const newById = convertArrayToObject(rooms, 'id');
      const newIds = rooms.map((room: Room) => room.id);

      return {
        byId: newById,
        allIds: newIds
      };

    case ADD_ROOM:
      const newRoom = action.payload;
      state.byId[newRoom[0].id] = newRoom[0];

      return {
        byId: {
          ...state.byId
        },
        allIds: [...state.allIds, newRoom[0].id]
      };

    case DELETE_ROOM:
      const room = action.payload;
      const newArr = state.allIds.filter((id) => id !== room[0].id);

      return {
        byId: {
          ...state.byId
        },
        allIds: [...newArr]
      };

    default:
      return state;
  }
};

export default reducer;
