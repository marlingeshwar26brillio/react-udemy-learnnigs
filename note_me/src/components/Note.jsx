import React from "react";

function Note({ text, index, deleteNote }) {
  return (
    <div className="bg-gray-200 p-3 mb-2 flex justify-between items-center">
      <p>{text}</p>
      <button
        onClick={() => deleteNote(index)}
        className="bg-red-400 px-2 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default Note;