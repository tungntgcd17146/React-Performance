import { FETCH_ROOM, ADD_ROOM, DELETE_ROOM, EDIT_ROOM } from '../../constants/roomCategory';

import { Payload } from '../../interface/roomCategory';

export const fetchRoom = (payload: Payload) => {
  return {
    type: FETCH_ROOM,
    payload: payload
  };
};

export const addRoom = (payload: Payload) => {
  return {
    type: ADD_ROOM,
    payload: payload
  };
};

export const deleteRoom = (payload: Payload) => {
  return {
    type: DELETE_ROOM,
    payload: payload
  };
};

export const editRoom = (payload: Payload) => {
  return {
    type: EDIT_ROOM,
    payload: payload
  };
};
