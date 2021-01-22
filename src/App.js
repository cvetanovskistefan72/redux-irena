import './App.css';
import { BooksList } from './components/BooksList';
import { Filters } from './components/Filters';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
       <Header/>  
      <Filters/>
      <BooksList/>
    </div>
  );
}

export default App;
