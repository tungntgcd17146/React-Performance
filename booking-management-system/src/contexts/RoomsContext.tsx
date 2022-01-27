import { State, ActionRooms } from '@/interface/roomCategory';
import { useContext } from 'react';

import { useReducer, createContext, ReactNode } from 'react';
import reducer, { initRooms } from '../reducer/rooms/reducer';

interface RoomContextProps {
  state: State;
  // eslint-disable-next-line no-unused-vars
  dispatch(action: ActionRooms): void;
}

export const RoomsContext = createContext({} as RoomContextProps);

export type Props = {
  children: ReactNode;
};

const RoomsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initRooms);

  return <RoomsContext.Provider value={{ state, dispatch }}>{children}</RoomsContext.Provider>;
};

export const useRoom = () => {
  const { state, dispatch } = useContext(RoomsContext);

  return { state, dispatch };
};

export default RoomsProvider;
