/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {
  useContext,
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useCallback
} from 'react';

import { initRooms } from '../mock/initData';
import { RoomInterface } from '../interface/room';

interface RoomContextProps {
  roomsAfterFilter: RoomInterface[];
  setInputSearch: Dispatch<SetStateAction<string>>;
  sortRooms: () => void;
  toggleSort: boolean;
  addRoom: (value: RoomInterface) => void;
  deleteRoom: (id: string) => void;
  numberList: number;
}

export const RoomsContext = createContext({} as RoomContextProps);

export type Props = {
  children: ReactNode;
};

const RoomsProvider = ({ children }: Props) => {
  const [rooms, setRooms] = useState(initRooms);
  const [inputSearch, setInputSearch] = useState('');
  const [toggleSort, setToggleSort] = useState(false);

  const roomsAfterFilter = rooms.filter((value) => {
    
    if (inputSearch === '' || value.name.toLowerCase().includes(inputSearch.toLowerCase())) {
      return value;
    }
  });

  const addRoom = useCallback((room: RoomInterface) => {
    setRooms((prevRooms) => [...prevRooms, room]);
  }, []);

  const deleteRoom = useCallback((roomId: string) => {
    setRooms((prevRooms) => prevRooms.filter((room) => room.id !== roomId));
  }, []);

  const sortRooms = useCallback(() => {
    setToggleSort(!toggleSort);
    setRooms((prevSortAZ) =>
      prevSortAZ.sort((a, b) => {
        const isReversed = toggleSort === true ? 1 : -1;

        return isReversed * a.name.localeCompare(b.name);
      })
    );
  }, [toggleSort]);

  const numberList = roomsAfterFilter.length;

  return (
    <RoomsContext.Provider
      value={{
        roomsAfterFilter,
        setInputSearch,
        sortRooms,
        toggleSort,
        addRoom,
        deleteRoom,
        numberList
      }}>
      {children}
    </RoomsContext.Provider>
  );
};

export const useRoom = () => useContext(RoomsContext);

export default RoomsProvider;
