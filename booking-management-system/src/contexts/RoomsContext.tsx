import { useReducer, createContext, ReactNode } from 'react';
import reducer, { initRooms } from '../reducer/rooms/reducer';

export const RoomsContext = createContext({});

export type Props = {
  children: ReactNode;
};

const RoomsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initRooms);

  return <RoomsContext.Provider value={[state, dispatch]}>{children}</RoomsContext.Provider>;
};

export default RoomsProvider;
