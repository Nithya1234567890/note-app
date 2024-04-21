import React, { useContext } from 'react'
import Form from './components/Form'
import './App.css'
import NoteItem from './components/NoteItem'
import NoteContext from './NoteContext'
const App = () => {
  const {notes}=useContext(NoteContext);
  return (
    <>
    <div className="container1">
    <div className="box">
    <h1>Write Your Notes</h1>
    <Form/>
   {notes && notes.map((note)=>(
    <div key={note.id} className='box2'>
   <NoteItem note={note}/>
   </div>
   ))}
    </div>
    </div>
    </>
  )
}

export default App

