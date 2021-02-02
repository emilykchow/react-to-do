import React,{useState} from 'react';
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Note from "./components/Note/Note.js";
import CreateArea from "./components/CreateArea/CreateArea.js";

import NoteStore from "./Store.js";

import './App.css';

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  
  return () => setValue(value => ++value); // update the state to force render
}

function App() {
  const forceUpdate = useForceUpdate();

  function deleteNote(id) {
    const filtered = NoteStore.GetAll().filter((note, index) => {
      return index !== id;
    });

    NoteStore.UpdateAll(filtered);
    forceUpdate();
  }

  function cbNoteAdded(note) {
    NoteStore.Add(note);
    forceUpdate();
  }

  function getNotes() {
    let x = NoteStore.GetAll();
    return x.map((note, index) => {
      return (<Note id={index} title={note.title} content={note.content} onDelete={deleteNote} key={note.title} />);
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onNoteAdded={(note) => cbNoteAdded(note)} />
      { getNotes() }
      <Footer />
    </div>
  );
}

export default App;
