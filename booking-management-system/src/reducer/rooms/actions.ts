import { FETCH_ROOM, ADD_ROOM, DELETE_ROOM, EDIT_ROOM } from '../../constants/roomCategory';

export const fetchRoom = (payload: string) => {
  return {
    type: FETCH_ROOM,
    payload: payload
  };
};

export const addRoom = (payload: string) => {
  return {
    type: ADD_ROOM,
    payload: payload
  };
};

export const deleteRoom = (payload: string) => {
  return {
    type: DELETE_ROOM,
    payload: payload
  };
};

// export const editRoom = (payload) => {
//   return {
//     type: EDIT_ROOM,
//     payload: payload
//   };
// };
