import { FETCH_ROOM, ADD_ROOM, DELETE_ROOM, EDIT_ROOM } from '../../constants/roomCategory';
import { convertArrayToObject } from '../../utils/helper/helper';

//Init room category
export const initRooms = {
  byId: {},
  allIds: []
};

type state = {
  byId: string[];
  allIds: string[];
};

type action = {
  type: string;
  payload: any;
};

//Reducer
const reducer = (state: state, action: action) => {
  switch (action.type) {
    case FETCH_ROOM:
      const rooms = action.payload;
      const newById = convertArrayToObject(rooms, 'id');
      const newIds = rooms.map((room: any) => room.id);

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
      const newArr = state.allIds.filter((item) => item !== roomId);

      return {
        byId: {
          ...state.byId
        },
        allIds: [...newArr]
      };

    // case EDIT_ROOM:
    //   return {
    //     byId: {
    //       ...state.byId
    //     },
    //     allIds: [...state.allIds]
    //   };

    default:
      throw new Error('invalid action');
  }
};

export default reducer;
