import { SET_ROOM, ADD_ROOM, DELETE_ROOM } from "../../constants/roomCategory"

export const setRoom = (payload) => {
    return {
        type: SET_ROOM,
        payload: payload
    }
}

export const addRoom = (payload) => {
    return {
        type: ADD_ROOM,
        payload: payload
    }
}

export const deleteRoom = (payload) => {
    return {
        type: DELETE_ROOM,
        payload: payload
    }
}