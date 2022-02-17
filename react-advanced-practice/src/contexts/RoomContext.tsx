import React, { useContext, useState, createContext, ReactNode, Dispatch } from 'react';

import { initRooms } from '../mock/initData';
import { RoomInterface } from '../interface/room';

interface RoomContextProps {
  rooms: RoomInterface[];
  setRooms: Dispatch<React.SetStateAction<RoomInterface[]>>;
}

export const RoomsContext = createContext({} as RoomContextProps);

export type Props = {
  children: ReactNode;
};

const RoomsProvider = ({ children }: Props) => {
  const [rooms, setRooms] = useState(initRooms);
  return <RoomsContext.Provider value={{ rooms, setRooms }}>{children}</RoomsContext.Provider>;
};

export const useRoom = () => {
  const { rooms, setRooms } = useContext(RoomsContext);

  return { rooms, setRooms };
};

export default RoomsProvider;
