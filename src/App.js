import './App.scss';
import NoNotes from './components/NoNotes';
import NotesApp from './components/NotesApp'
import Note from './Note'
import { useState } from 'react';
import generateUniqueId from 'generate-unique-id';
const exampleData = [
  {
      title:"Hello",
      content: "World",
      id: generateUniqueId()
  },
  {
    title:"Hello1",
    content: "World",
    id:generateUniqueId()
  }
]
function App() {
  let hasNotes = true
  const [data, setData] = useState(exampleData)
  const firstNote = new Note('hello', 'world')
  const notesLength = data.length

  function createNewNote(){
    return setData(prev =>{
      return [...prev,   {
        title:"Hello",
        content: "World",
        id:generateUniqueId()
      }]
    })
  }
  const deleteNote = (id) => setData(items => items.filter((_, i) => id !== items[i].id));
  const deleteAll = () => setData(() => [])

  return (
    <div className="App">
      {hasNotes ? <NotesApp data={data} createNewNote={createNewNote} deleteNote={deleteNote} notesLength={notesLength} deleteAll={deleteAll}/> : <NoNotes data={data}/>}
    </div>
  );
}

export default App;
