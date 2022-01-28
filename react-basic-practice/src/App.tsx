import { InputSearch } from './components/InputSearch';
import { AddButton } from './components/AddButton';
import { TotalNumber } from './components/TotalNumber';
import { RoomTable } from './components/RoomTable';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app container">
      <header className="app-header d-flex justify-content-between">
        <AddButton />
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
