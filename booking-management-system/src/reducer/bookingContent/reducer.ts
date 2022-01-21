import {
  FETCH_INFO,
  ADD_INFO,
  DELETE_INFO,
  PRICE_FILTER_INFO,
  ROOM_FILTER_INFO
} from '../../constants/bookingInfos';
import { convertArrayToObject } from '../../utils/helper/helper';

//Init room category
export const InitInfos = {
  byIdInfo: {},
  allIdsInfo: []
};

type state = {
  byIdInfo: string[];
  allIdsInfo: string[];
};

type action = {
  type: string;
  payload: any;
};

//Reducer
const reducer = (state: state, action: action) => {
  switch (action.type) {
    case FETCH_INFO:
      const infos = action.payload;
      const newByIdInfo = convertArrayToObject(infos, 'id');
      const newIds = infos.map((room: any) => room.id);

      return {
        byIdInfo: newByIdInfo,
        allIdsInfo: newIds
      };

    case ADD_INFO:
      const newInfo = action.payload;
      state.byIdInfo[newInfo.id] = newInfo;

      return {
        byIdInfo: {
          ...state.byIdInfo
        },
        allIdsInfo: [...state.allIdsInfo, newInfo['id']]
      };

    case DELETE_INFO:
      const newInfoId = action.payload;
      delete state.byIdInfo[newInfoId];
      const newArr = state.allIdsInfo.filter((item) => item !== newInfoId);

      return {
        byIdInfo: {
          ...state.byIdInfo
        },
        allIdsInfo: [...newArr]
      };

    // case EDIT_ROOM:
    //   return {
    //     byIdInfo: {
    //       ...state.byIdInfo
    //     },
    //     allIdsInfo: [...state.allIdsInfo]
    //   };

    case PRICE_FILTER_INFO:
      const priceRange = action.payload;
      // delete state.byIdInfo[newInfoId];
      const realId = state.allIdsInfo.filter((item) => {
        if (parseInt(priceRange) <= parseInt(state.byIdInfo[item].totalPrice))
          return [...state.allIdsInfo];
      });

      // const realValue =  state.allIdsInfo.filter((item)=>
      //   item !== realId
      // )

      // const newArr = state.allIdsInfo.filter((item) => item !== newInfoId);
      console.log(priceRange);
      console.log(realId);
      console.log(state.byIdInfo);
      return {
        byIdInfo: {
          ...state.byIdInfo
        },
        allIdsInfo: [...realId]
      };

    case ROOM_FILTER_INFO:
      const roomType = action.payload;
      const newArrId = state.allIdsInfo.filter((item) => {
        if (parseInt(roomType) === parseInt(state.byIdInfo[item].roomName))
          return [...state.allIdsInfo];
      });
      console.log(newArrId);

      return {
        byIdInfo: {
          ...state.byIdInfo
        },
        allIdsInfo: [...newArrId]
      };

    default:
      throw new Error('invalid action');
  }
};

export default reducer;
