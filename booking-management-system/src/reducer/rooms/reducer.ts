import { FETCH_ROOM, SET_ROOM, ADD_ROOM, DELETE_ROOM } from "../../constants/roomCategory"

//Init room category
export const init = {
    roomById: {},
    roomsAllId: []
}

//Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_ROOM:
            return {

            }
        case SET_ROOM:
            return {

            }
        case ADD_ROOM: 
            return {
                ...state,
                roomsAllId: [...state.roomsAllId, action.payload]
            };
        case DELETE_ROOM:
            return {
            }
        default:
            throw new Error("invalid action")
    }
}

export default reducer