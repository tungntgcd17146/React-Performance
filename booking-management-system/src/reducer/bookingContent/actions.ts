import {
  FETCH_INFO,
  ADD_INFO,
  DELETE_INFO,
  PRICE_FILTER_INFO,
  ROOM_FILTER_INFO
} from '../../constants/bookingInfos';

export const fetchInfos = (payload) => {
  return {
    type: FETCH_INFO,
    payload: payload
  };
};

export const addInfo = (payload) => {
  return {
    type: ADD_INFO,
    payload: payload
  };
};

export const deleteInfo = (payload) => {
  return {
    type: DELETE_INFO,
    payload: payload
  };
};

export const filterPrice = (payload) => {
  return {
    type: PRICE_FILTER_INFO,
    payload: payload
  };
};

export const filterByRoom = (payload) => {
  return {
    type: ROOM_FILTER_INFO,
    payload: payload
  };
};
