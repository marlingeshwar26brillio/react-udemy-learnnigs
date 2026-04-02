import React, { useState } from "react";
import Recyclebin from "./Recyclebin";

function Navbar({ addNote }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addNote(input);
    setInput("");
  };

  return (
    <div className="w-full h-16 bg-gray-800 text-white flex items-center px-4">
      
      <h1 className="text-2xl font-bold">My Notes</h1>

      <input
        className="ml-6 px-2 py-1 text-black"
        type="text"
        placeholder="Write a note..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="ml-2 bg-green-500 px-3 py-1 rounded"
      >
        Add
      </button>

      <div className="ml-auto">
        <Recyclebin />
      </div>
    </div>
  );
}

export default Navbar;