/* eslint-disable no-case-declarations */
import { FETCH_ROOM, ADD_ROOM, DELETE_ROOM } from '../../constants/roomCategory';
import { convertArrayToObject } from '../../utils/helper/helper';

import { InitRooms } from '../../interface/roomCategory';

interface Action {
  type: string;
  payload;
}

type Room = {
  id: number;
};

//Init room category
export const initRooms = {
  byId: {},
  allIds: []
};

//Reducer
const reducer = (state: InitRooms, action: Action) => {
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
      state.byId[newRoom['id']] = newRoom;

      return {
        byId: {
          ...state.byId
        },
        allIds: [...state.allIds, newRoom['id']]
      };

    case DELETE_ROOM:
      const roomId = action.payload;
      delete state.byId[roomId];
      const newArr = state.allIds.filter((item: number) => item !== roomId);

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
