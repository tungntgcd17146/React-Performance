import { FETCH_ROOM, ADD_ROOM, DELETE_ROOM } from '../../constants/roomCategory';

type PostRoom = {
  id: number;
  roomImage: string;
  roomName: string;
  totalRoom: string;
  price: string;
};

export const fetchRoom = (payload) => {
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

export const deleteRoom = (payload) => {
  return {
    type: DELETE_ROOM,
    payload: payload
  };
};
