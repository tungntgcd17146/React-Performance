/* eslint-disable prettier/prettier */
import { InputSearch } from './components/InputSearch';
import { AddButton } from './components/AddButton';
import { TotalNumber } from './components/TotalNumber';
import { RoomTable } from './components/RoomTable';

import { useState } from 'react';
import { rooms } from './mock/initData';
import { RoomInterface } from './interface/room';

import { getRandomId, getRandomName, getRandomPrice, getRandomQuantity } from './helper/random';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [roomsData, setRoomsData] = useState(rooms);
  const [inputSearch, setInputSearch] = useState('');

  const handleAddRoom = () => {
    const newRoom: RoomInterface = {
      id: getRandomId(5),
      name: getRandomName(),
      quantity: parseInt(getRandomQuantity(2)),
      price: getRandomPrice()
    };
    
    if (newRoom) {
      setRoomsData([...roomsData, newRoom]);
    }
  };

  const handleDeleteRoom = (roomId: string) => {
    const roomsAfterDel = roomsData.filter((id) => id.id !== roomId);
    setRoomsData(roomsAfterDel);
  };

  const roomsAfterFilter = roomsData.filter((value) => {
    
    if (inputSearch === '') {
      
      return value;
    } 
    
    else if (value.name.toLowerCase().includes(inputSearch.toLowerCase())) {
      
      return value;
    }
  });

  return (
    <div className="app container">
      <header className="app-header d-flex justify-content-between">
        <AddButton onClickAdd={handleAddRoom} />
        <InputSearch onChangeValue={setInputSearch} />
        <TotalNumber totalRooms={roomsData} />
      </header>
      <section className="app-body">
        <RoomTable
          rooms={roomsAfterFilter}
          onDeleteRoom={handleDeleteRoom}
          setRooms={setRoomsData}
        />
      </section>
    </div>
  );
}

export default App;
