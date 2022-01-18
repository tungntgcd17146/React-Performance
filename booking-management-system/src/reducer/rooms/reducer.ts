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
            
            // state.byId = newById,
            // state.allIds = newIds

            return {
                byId: newById,
                allIds: newIds
            }
            // break;
        
        case ADD_ROOM: 
            const newRoom = action.payload
            // const newById = state.byId
            // const newId = Object.keys(arr).length + 1

            state.byId[state.allIds.length + 1] = newRoom
            
            // state.byId[state.allIds.length + 1]= newRoom,
            // state.allIds = [...state.allIds, state.allIds.length + 1]

            return {
                byId: {
                    ...state.byId
                },
                allIds: [...state.allIds, state.allIds.length + 1]
            };
            // break;
        
        case DELETE_ROOM:

            const roomId = action.payload    

            // return {
            // }
            
        default:
            throw new Error("invalid action")
    }
}

export default reducer