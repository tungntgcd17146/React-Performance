import { FETCH_INFO, ADD_INFO, DELETE_INFO, SORT_INFO } from '../../constants/bookingInfos';
import { Payload } from '../../interface/bookingContent';

export const fetchInfos = (payload: Payload) => {
  return {
    type: FETCH_INFO,
    payload: payload
  };
};

export const addInfo = (payload: Payload) => {
  return {
    type: ADD_INFO,
    payload: payload
  };
};

export const deleteInfo = (payload: Payload) => {
  return {
    type: DELETE_INFO,
    payload: payload
  };
};

export const sortByName = (payload: Payload) => {
  return {
    type: SORT_INFO,
    payload: payload
  };
};
