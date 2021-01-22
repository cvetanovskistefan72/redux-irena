import './App.css';
import { BooksList } from './components/BooksList';
import { Filters } from './components/Filters';
import { Header } from './components/Header';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
       <Header/>  
      <Filters/>
      <BooksList/>
      <TestComponent/>
    </div>
  );
}

export default App;
