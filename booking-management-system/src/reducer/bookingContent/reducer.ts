/* eslint-disable no-case-declarations */
import {
  FETCH_INFO,
  ADD_INFO,
  DELETE_INFO
  // PRICE_FILTER_INFO,
  // ROOM_FILTER_INFO
} from '../../constants/bookingInfos';
import { convertArrayToObject } from '../../utils/helper/info';
import { InitInfos, ActionInfos, PostInfo } from '../../interface/bookingContent';

interface Room {
  id: number;
}

//Init room category
export const initInfos: InitInfos = {
  byIdInfo: {},
  allIdsInfo: []
};

//Reducer
const reducer = (state: InitInfos, action: ActionInfos) => {
  switch (action.type) {
    case FETCH_INFO:
      const infos = action.payload;
      const newByIdInfo = convertArrayToObject(infos, 'id');
      const newIds = infos.map((room: Room) => room.id);

      return {
        byIdInfo: newByIdInfo,
        allIdsInfo: newIds
      };

    case ADD_INFO:
      const newInfo: PostInfo[] = action.payload;
      state.byIdInfo[newInfo[0].id] = newInfo[0];

      return {
        byIdInfo: {
          ...state.byIdInfo
        },
        allIdsInfo: [...state.allIdsInfo, newInfo[0].id]
      };

    case DELETE_INFO:
      const newInfoId = action.payload;
      const newArr = state.allIdsInfo.filter((item) => item !== newInfoId);

      return {
        byIdInfo: {
          ...state.byIdInfo
        },
        allIdsInfo: [...newArr]
      };

    // case PRICE_FILTER_INFO:
    //   const priceRange = action.payload;
    //   const realId = state.allIdsInfo.filter((item) => {
    //     if (parseInt(priceRange) <= parseInt(state.byIdInfo[item].totalPrice))
    //       return [...state.allIdsInfo];
    //   });

    //   return {
    //     byIdInfo: {
    //       ...state.byIdInfo
    //     },
    //     allIdsInfo: [...realId]
    //   };

    // case ROOM_FILTER_INFO:
    //   const roomType = action.payload;
    //   const newArrId = state.allIdsInfo.filter((item) => {
    //     if (roomType === state.byIdInfo[item].roomName) return [...state.allIdsInfo];
    //   });

    //   return {
    //     byIdInfo: {
    //       ...state.byIdInfo
    //     },
    //     allIdsInfo: [...newArrId]
    //   };

    default:
      return state;
  }
};

export default reducer;
