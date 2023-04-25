import React, { useState } from "react";

function NoteTaker() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");

  const handleNoteChange = (event) => {
    setCurrentNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes([...notes, currentNote]);
    setCurrentNote("");
  };
  const del = () => {};

  return (
    <div className="App-header">
      <h1>My Notes</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Note:
          <input type="text" value={currentNote} onChange={handleNoteChange} />
        </label>
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {notes.map((note, index) => (
          //   <li key={index}>{note}</li>
          <div>
            <input type="checkbox" id="note" />
            <label for="note">{note}</label>
            {/* <h> (size:){note.length}</h> */}
            <button onClick={del}>delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default NoteTaker;
