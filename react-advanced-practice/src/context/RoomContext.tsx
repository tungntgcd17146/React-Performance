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
  rooms: RoomInterface[];
  setRooms: Dispatch<React.SetStateAction<RoomInterface[]>>;
  roomsAfterFilter: RoomInterface[];
  setInputSearch: Dispatch<SetStateAction<string>>;
  sortRooms: () => void;
  toggleSort: boolean;
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

  const sortRooms = useCallback(() => {
    setToggleSort(!toggleSort);
    setRooms((prevSortAZ) =>
      prevSortAZ.sort((a, b) => {
        const isReversed = toggleSort === true ? 1 : -1;

        return isReversed * a.name.localeCompare(b.name);
      })
    );
  }, [toggleSort]);

  return (
    <RoomsContext.Provider
      value={{ rooms, setRooms, roomsAfterFilter, setInputSearch, sortRooms, toggleSort }}>
      {children}
    </RoomsContext.Provider>
  );
};

export const useRoom = () => {
  const { rooms, setRooms, roomsAfterFilter, setInputSearch, sortRooms, toggleSort } =
    useContext(RoomsContext);

  return { rooms, setRooms, roomsAfterFilter, setInputSearch, sortRooms, toggleSort };
};

export default RoomsProvider;
