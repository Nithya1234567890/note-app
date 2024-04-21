import React, { useEffect, useState } from 'react'
import NoteContext from './NoteContext'

const NoteProvider = (props) => {
    const [notes,setNotes]=useState([]);
    const addNote=(note)=>{
        setNotes((prev)=>[{id:Date.now(),...note},...prev])
    }
    const updateNote=(note)=>{
        setNotes((prev)=>prev.map((prevNote)=>(prevNote.id===note.id? note : prevNote)))
    }
    const deleteNote=(id)=>{
        setNotes((prev)=>prev.filter((prevNote)=>prevNote.id !== id))
    }
    useEffect(()=>{
        const notes=JSON.parse(localStorage.getItem("notes"))
        if(notes && notes.length>0) setNotes(notes)
         // eslint-disable-next-line   
    },[])
    useEffect(()=>{
        localStorage.setItem("notes",JSON.stringify(notes))
    },[notes])
  return (
    <>
    <NoteContext.Provider value={{notes,setNotes,addNote,updateNote,deleteNote}}>
        {props.children}
    </NoteContext.Provider>
 </>
  )
}

export default NoteProvider
