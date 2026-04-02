import React from "react";
import Note from "./Note";

function NoteList({ notes, deleteNote }) {
  return (
    <div className="p-4">
      {notes.length === 0 ? (
        <p>No notes yet</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            text={note}
            index={index}
            deleteNote={deleteNote}
          />
        ))
      )}
    </div>
  );
}

export default NoteList;