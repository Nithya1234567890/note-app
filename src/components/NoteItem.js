import React, { useContext, useState } from "react";
import "./NoteItem.css";
import NoteContext from "../NoteContext";

const NoteItem = ({ note }) => {
  const { updateNote, deleteNote } = useContext(NoteContext);
  const [inputValue, setInputValue] = useState(note.note);
  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    const textarea = event.target;
    textarea.style.height = "26px"; 
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const edit = () => {
    if (isEditable) {
      updateNote({ ...note, note: inputValue });
      setIsEditable(false);
    } else {
      setIsEditable((prev) => !prev);
    }
  };

  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <>
      <textarea
        id="myInput"
        value={inputValue}
        onChange={handleChange}
        readOnly={!isEditable}
        style={{height:"26px"}}
      />
      <div className="icons">
        {!isEditable && (
          <span onClick={edit}>
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
        )}
        {isEditable && (
          <span onClick={edit}>
            <i className="fa-regular fa-floppy-disk"></i>
          </span>
        )}
        <span onClick={handleDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </span>
      </div>
    </>
  );
};

export default NoteItem;
