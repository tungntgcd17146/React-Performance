import { useReducer, createContext } from "react";
import reducer, { init } from "../reducer/rooms/reducer"

type RoomsContext = [
    state:  [],
    dispatch: () => void
]

export const RoomsContext = createContext({})

const RoomsProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(reducer, init)

    return (
        <RoomsContext.Provider value={[state, dispatch]}>
            {children}
        </RoomsContext.Provider>
    )
}

export default RoomsProvider