import {
  FETCH_INFO,
  ADD_INFO,
  DELETE_INFO,
  EDIT_INFO,
  UPDATE_INFO,
  PRICE_FILTER_INFO,
  ROOM_FILTER_INFO,
  SORT_INFO
} from '../../constants/bookingInfos';

export const fetchInfos = (payload: string) => {
  return {
    type: FETCH_INFO,
    payload: payload
  };
};

export const addInfo = (payload: string) => {
  return {
    type: ADD_INFO,
    payload: payload
  };
};

export const deleteInfo = (payload: string) => {
  return {
    type: DELETE_INFO,
    payload: payload
  };
};

// export const editInfo = (payload: string[]) => {
//   return {
//     type: EDIT_INFO,
//     payload: payload
//   };
// };

// export const updateInfo = (payload: string) => {
//   return {
//     type: UPDATE_INFO,
//     payload: payload
//   };
// };

export const filterPrice = (payload: string) => {
  return {
    type: PRICE_FILTER_INFO,
    payload: payload
  };
};

// export const filterByDate = (payload) => {
//   return {
//     type: DATE_FILTER_INFO,
//     payload: payload
//   };
// };

export const filterByRoom = (payload: string) => {
  return {
    type: ROOM_FILTER_INFO,
    payload: payload
  };
};
