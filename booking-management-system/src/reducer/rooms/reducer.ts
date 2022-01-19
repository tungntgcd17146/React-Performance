import { FETCH_ROOM, ADD_ROOM, DELETE_ROOM, EDIT_ROOM } from '../../constants/roomCategory';
import { convertArrayToObject } from '../../utils/helper/helper';

//Init room category
export const init = {
  byId: {},
  allIds: []
};

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_ROOM:
      const rooms = action.payload;
      const newById = convertArrayToObject(rooms, 'id');
      const newIds = rooms.map((room) => room.id);

      return {
        byId: newById,
        allIds: newIds
      };

    case ADD_ROOM:
      const newRoom = action.payload;
      state.byId[state.allIds.length + 1] = newRoom;

      return {
        byId: {
          ...state.byId
        },
        allIds: [...state.allIds, state.allIds.length + 1]
      };

    case DELETE_ROOM:
      const roomId = action.payload;
      delete state.byId[roomId];
      state.allIds.splice(roomId - 1, 1);

      return {
        byId: {
          ...state.byId
        },
        allIds: [...state.allIds]
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
