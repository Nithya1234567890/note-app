import React, { useContext, useState } from 'react'
import NoteContext from '../NoteContext'
import './Form.css'
const Form = () => {
    const {addNote}=useContext(NoteContext);
    const [noteMsg,setNoteMsg]=useState("");


    const add=(e)=>{
      e.preventDefault();
      if(noteMsg==="") return
      addNote({note:noteMsg});
      setNoteMsg("");
    }
  return (
    <>
    <form action="" onSubmit={add}>
      <input type="text"
      placeholder='Write here...'
      value={noteMsg}
      onChange={(e)=>setNoteMsg(e.target.value)}
      />
      <button type="submit">
        Add
      </button>
    </form>
    </>
  )
}

export default Form
