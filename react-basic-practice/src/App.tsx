import { InputSearch } from './components/InputSearch';
import { AddButton } from './components/AddButton';
import { TotalNumber } from './components/TotalNumber';
import { RoomTable } from './components/RoomTable';

import { useState } from 'react';
import { rooms } from './mock/initData';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [roomsData, setRoomsData] = useState(rooms);

  return (
    <div className="app container">
      <header className="app-header d-flex justify-content-between">
        <AddButton />
        <InputSearch />
        <TotalNumber />
      </header>
      <section className="app-body">
        <RoomTable rooms={roomsData} />
      </section>
    </div>
  );
}

export default App;
