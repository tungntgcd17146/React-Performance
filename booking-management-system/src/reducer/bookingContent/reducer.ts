/* eslint-disable no-case-declarations */
import {
  FETCH_INFO,
  ADD_INFO,
  DELETE_INFO,
  SORT_INFO
  // PRICE_FILTER_INFO,
  // ROOM_FILTER_INFO
} from '../../constants/bookingInfos';
import { convertArrayToObject } from '../../utils/helper/convert';
import { ActionInfos, State } from '../../interface/bookingContent';

interface Room {
  id: number;
}

//Init room category
export const initInfos: State = {
  byIdInfo: {},
  allIdsInfo: []
};

//Reducer
const reducer = (state: State, action: ActionInfos) => {
  switch (action.type) {
    case FETCH_INFO:
      const infos = action.payload.infos || [];
      const newByIdInfo = convertArrayToObject(infos);
      const newIds = infos.map((room: Room) => room.id);

      return {
        byIdInfo: newByIdInfo,
        allIdsInfo: newIds
      };

    case ADD_INFO:
      const newInfo = action.payload.info!;
      state.byIdInfo[newInfo.id] = newInfo;

      return {
        byIdInfo: {
          ...state.byIdInfo
        },
        allIdsInfo: [...state.allIdsInfo, newInfo.id]
      };

    case DELETE_INFO:
      const newInfoId = action.payload.id;
      const newArr = state.allIdsInfo.filter((item) => item !== newInfoId);

      return {
        byIdInfo: {
          ...state.byIdInfo
        },
        allIdsInfo: [...newArr]
      };

    case SORT_INFO:
      const data = action.payload.totalPrice;

      if (data === true) {
        state.allIdsInfo.sort(
          (a, b) => parseInt(state.byIdInfo[a].totalPrice) - parseInt(state.byIdInfo[b].totalPrice)
        );
      } else {
        state.allIdsInfo.sort(
          (a, b) => parseInt(state.byIdInfo[b].totalPrice) - parseInt(state.byIdInfo[a].totalPrice)
        );
      }

      return {
        byIdInfo: {
          ...state.byIdInfo
        },
        allIdsInfo: [...state.allIdsInfo]
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
