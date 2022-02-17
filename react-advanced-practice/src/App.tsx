/* eslint-disable prettier/prettier */

import InputSearch from './components/InputSearch';
import AddButton from './components/AddButton';
import TotalNumber from './components/TotalNumber';
import { RoomTable } from './components/RoomTable';

import { useCallback, useState } from 'react';
import { initRooms } from './mock/initData';
import { RoomInterface } from './interface/room';

import { getRandomId, getRandomName, getRandomPrice, getRandomQuantity } from './helper/random';

import ErrorBoundary from './components/ErrorBoundaries';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [rooms, setRooms] = useState(initRooms);
  const [inputSearch, setInputSearch] = useState('');
  const [toggleSort, setToggleSort] = useState(false);

  const handleAddRoom = useCallback(() => {
    const newRoom: RoomInterface = {
      id: getRandomId(5),
      name: getRandomName(),
      quantity: parseInt(getRandomQuantity(2)),
      price: getRandomPrice()
    };
    setRooms(prevRooms => [...prevRooms, newRoom]);
  }, []);

  const handleDeleteRoom = useCallback(
    (roomId: string) => {
      setRooms(prevRooms => prevRooms.filter(room => room.id !== roomId));
    },
    []
  );

  const roomsAfterFilter = rooms.filter((value) => {
    
    if (inputSearch === '' || value.name.toLowerCase().includes(inputSearch.toLowerCase())) {
      return value;
    }
  });

  const toggleSortButton = useCallback(() => {
    setToggleSort(!toggleSort);
    setRooms(prevSortAZ => prevSortAZ.sort((a, b) => {
      const isReversed = toggleSort === true ? 1 : -1;

      return isReversed * a.name.localeCompare(b.name);
    }));
  }, [toggleSort]);

  return (
    <div className="container">
      <header className="d-flex justify-content-between mt-5">
        <AddButton onClickAdd={handleAddRoom} />
        <InputSearch onChangeValue={setInputSearch} />
        <TotalNumber totalRooms={roomsAfterFilter.length} />
      </header>
      <section className="mt-5">
        <ErrorBoundary>
          <RoomTable
            roomsAfterFilter={roomsAfterFilter}
            onDeleteRoom={handleDeleteRoom}
            onSortButton={toggleSortButton}
            toggleSort={toggleSort}
          />
        </ErrorBoundary>
      </section>
    </div>
  );
}

export default App;
