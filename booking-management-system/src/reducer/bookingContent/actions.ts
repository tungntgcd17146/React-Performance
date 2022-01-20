import {  FETCH_INFO,
          ADD_INFO,
          DELETE_INFO,
          EDIT_INFO,
          UPDATE_INFO,
          PRICE_FILTER_INFO,
          DATE_FILTER_INFO,
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

export const editInfo = (payload) => {
  return {
    type: EDIT_INFO,
    payload: payload
  };
};

export const updateInfo = (payload) => {
  return {
    type: UPDATE_INFO,
    payload: payload
  };
};

export const filterByPrice = (payload) => {
  return {
    type: PRICE_FILTER_INFO,
    payload: payload
  };
};

export const filterByDate = (payload) => {
  return {
    type: DATE_FILTER_INFO,
    payload: payload
  };
};

export const filterByRoom = (payload) => {
  return {
    type: ROOM_FILTER_INFO,
    payload: payload
  };
};