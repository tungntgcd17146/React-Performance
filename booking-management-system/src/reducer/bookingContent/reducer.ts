import { FETCH_INFO, ADD_INFO } from '../../constants/bookingInfos';
import { convertArrayToObject } from '../../utils/helper/helper';

//Init room category
export const InitInfos = {
  byIdInfo: {},
  allIdsInfo: []
};

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_INFO:
      const infos = action.payload;
      const newByIdInfo = convertArrayToObject(infos, 'id');
      const newIds = infos.map((room) => room.id);

      return {
        byIdInfo: newByIdInfo,
        allIdsInfo: newIds
      };

    case ADD_INFO:
      const newInfo = action.payload;
      state.byIdInfo[newInfo['id']] = newInfo;

      return {
        byIdInfo: {
          ...state.byIdInfo
        },
        allIdsInfo: [...state.allIdsInfo, newInfo['id']]
      };

    // case DELETE_ROOM:
    //   const roomId = action.payload;
    //   delete state.byIdInfo[roomId];
    //   state.allIdsInfo.splice(roomId - 1, 1);

    //   return {
    //     byIdInfo: {
    //       ...state.byIdInfo
    //     },
    //     allIdsInfo: [...state.allIdsInfo]
    //   };

    // case EDIT_ROOM:
    //   return {
    //     byIdInfo: {
    //       ...state.byIdInfo
    //     },
    //     allIdsInfo: [...state.allIdsInfo]
    //   };

    default:
      throw new Error('invalid action');
  }
};

export default reducer;
