import { FETCH_ROOM, ADD_ROOM, DELETE_ROOM } from '../../constants/roomCategory';

import { PostRoom } from '../../interface/roomCategory';

export const fetchRoom = (payload: PostRoom) => {
  return {
    type: FETCH_ROOM,
    payload: payload
  };
};

export const addRoom = (payload: PostRoom) => {
  return {
    type: ADD_ROOM,
    payload: payload
  };
};

export const deleteRoom = (payload: number) => {
  return {
    type: DELETE_ROOM,
    payload: payload
  };
};
