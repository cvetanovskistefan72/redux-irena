import './App.css';
import { BooksList } from './components/BooksList';
import { Filters } from './components/Filters';

function App() {
  return (
    <div className="App">
      <Filters/>
      <BooksList/>
    </div>
  );
}

export default App;
