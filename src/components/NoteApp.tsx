import { useState } from "react";
import { getInitialData } from "../utils/data";
import Navbar from "./Navbar";
import { Note } from "../utils/types";
import Body from "./Body";

const NoteApp = () => {
  const [notes, setNotes] = useState(getInitialData);
  const [filteredNotes, setFilteredNotes] = useState(getInitialData);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim()) {
      const searchResults = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredNotes(searchResults);
    } else {
      setFilteredNotes(notes);
    }
  };

  const addNote = (title: string, body: string) => {
    const newNote: Note = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const toggleArchiveNote = (id: number) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setFilteredNotes(updatedNotes);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Body
        notes={filteredNotes}
        addNote={addNote}
        deleteNote={deleteNote}
        toggleArchiveNote={toggleArchiveNote}
      />
    </div>
  );
};

export default NoteApp;
