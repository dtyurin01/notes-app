import './App.scss';
import NoNotes from './components/NoNotes';
import NotesApp from './components/NotesApp'
import data from './data'

function App() {
  return (
    <div className="App">
      {data.hasNotes ? <NotesApp/> : <NoNotes/>}
    </div>
  );
}

export default App;
