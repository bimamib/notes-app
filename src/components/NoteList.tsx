import NoteItem from "./NoteItem";
import { NoteListProps } from "../utils/types";

const NoteList = ({ notes, deleteNote, toggleArchiveNote }: NoteListProps) => {
  if (notes.length === 0) {
    return <p>No notes available</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          toggleArchiveNote={toggleArchiveNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
