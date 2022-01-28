import { InputSearch } from './components/InputSearch';
import { RoomCreate } from './components/AddRoom';
import { TotalNumber } from './components/TotalNumber';
import { RoomTable } from './components/RoomTable';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app container">
      <header className="app-header d-flex justify-content-between">
        <RoomCreate />
        <InputSearch />
        <TotalNumber />
      </header>
      <section className="app-body">
        <RoomTable />
      </section>
    </div>
  );
}

export default App;
