import React from "react";
import Note from "./Note";

const Notes = (props) => {
  const toggle = (selectedNote) => {
    props.selectNote(selectedNote)
    props.toggleImportanceOf(selectedNote.id)
  }
  return (
    <ul>
      {props.notes.map((note) => (
        // props.selectNote(note)
        <Note key={note.id}
                   note={note}
                   toggleImportance={toggle(note)}
        />
      ))}
    </ul>
  );
};

export default Notes;
