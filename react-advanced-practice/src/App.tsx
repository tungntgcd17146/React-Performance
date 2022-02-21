/* eslint-disable prettier/prettier */
import InputSearch from './components/InputSearch';
import AddButton from './components/AddButton';
import TotalNumber from './components/TotalNumber';
import { RoomTable } from './components/RoomTable';

import ErrorBoundary from './components/ErrorBoundaries';
import { useRoom } from './context/RoomContext';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { setInputSearch, numberList, addRoom } = useRoom();
  
  return (
    <div className="container">
      <header className="d-flex justify-content-between mt-5">
        <AddButton addRoom={addRoom}/>
        <InputSearch setInputSearch={setInputSearch}/>
        <TotalNumber numberList={numberList}/>
      </header>
      <section className="mt-5">
        <ErrorBoundary>
          <RoomTable />
        </ErrorBoundary>
      </section>
    </div>
  );
}

export default App;
