import { FETCH_ROOM, ADD_ROOM, DELETE_ROOM } from "../../constants/roomCategory"
import { convertArrayToObject } from '../../utils/helper/helper'

//Init room category
export const init = {
    byId: {},
    allIds: []
}

//Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_ROOM:
            const rooms = action.payload
            const newById = convertArrayToObject(rooms, 'id')
            const newIds = rooms.map(room => room.id)
            
            return {
                ...state,
                byId: newById,
                allIds: newIds
            }
        
        case ADD_ROOM: 
            const addRoom = action.payload
            return {
                ...state,
                allIds: [...state.roomsAllId, action.payload]
            };
        
        case DELETE_ROOM:
            return {
            }
        
        default:
            throw new Error("invalid action")
    }
}

export default reducer