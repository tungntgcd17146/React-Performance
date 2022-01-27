//import { useState } from 'react';
import { RoomCreate } from './RoomCreate/RoomCreate';
import { RoomSearch } from './RoomSearch';
import { ListTotal } from './ListTotal';
import { RoomTable } from './RoomTable/RoomTable';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app container">
      <header className="app-header d-flex justify-content-between">
        <RoomCreate />
        <RoomSearch />
        <ListTotal />
      </header>
      <section className="app-body">
        <RoomTable />
      </section>
    </div>
  );
}

export default App;
