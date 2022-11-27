import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((Note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((currentNote, index) => (
        <Note
          key={index}
          id={index}
          title={currentNote.title}
          content={currentNote.content}
          onChecked={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
