import { FETCH_INFO } from '../../constants/bookingInfos';
import { convertArrayToObject } from '../../utils/helper/helper';

//Init room category
export const InitInfos = {
  byId: {},
  allIds: []
};

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_INFO:
      const infos = action.payload;
      const newById = convertArrayToObject(infos, 'id');
      const newIds = infos.map((room) => room.id);

      return {
        byId: newById,
        allIds: newIds
      };

    // case ADD_ROOM:
    //   const newRoom = action.payload;
    //   state.byId[state.allIds.length + 1] = newRoom;

    //   return {
    //     byId: {
    //       ...state.byId
    //     },
    //     allIds: [...state.allIds, state.allIds.length + 1]
    //   };

    // case DELETE_ROOM:
    //   const roomId = action.payload;
    //   delete state.byId[roomId];
    //   state.allIds.splice(roomId - 1, 1);

    //   return {
    //     byId: {
    //       ...state.byId
    //     },
    //     allIds: [...state.allIds]
    //   };

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
