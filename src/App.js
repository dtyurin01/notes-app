import './App.scss';
import NoNotes from './components/NoNotes';
import NotesApp from './components/NotesApp'
import Note from './Note'
import { useState } from 'react';
const exampleData = [
  {
      title:"Hello",
      content: "World"
  },
  {
    title:"Hello",
    content: "World"
  }
]
function App() {
  let hasNotes = true
  const [data, setData] = useState(exampleData)
  const firstNote = new Note('hello', 'world')


  function createNewNote(){
    return setData(prev =>{
      return [...prev,   {
        title:"Hello",
        content: "World"
      }]
    })
  }
  return (
    <div className="App">
      {hasNotes ? <NotesApp data={data} createNewNote={createNewNote}/> : <NoNotes data={data}/>}
    </div>
  );
}

export default App;
