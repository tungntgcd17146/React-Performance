import {
  FETCH_INFO,
  ADD_INFO,
  DELETE_INFO,
  PRICE_FILTER_INFO,
  ROOM_FILTER_INFO
} from '../../constants/bookingInfos';
import { PostInfo } from '../../interface/bookingContent';

// import { PostInfo } from '../../interface/bookingContent';

export const fetchInfos = (payload: PostInfo[]) => {
  return {
    type: FETCH_INFO,
    payload: payload
  };
};

export const addInfo = (payload: PostInfo[]) => {
  return {
    type: ADD_INFO,
    payload: payload
  };
};

export const deleteInfo = (payload: number) => {
  return {
    type: DELETE_INFO,
    payload: payload
  };
};

export const filterPrice = (payload: string) => {
  return {
    type: PRICE_FILTER_INFO,
    payload: payload
  };
};

export const filterByRoom = (payload: string) => {
  return {
    type: ROOM_FILTER_INFO,
    payload: payload
  };
};
