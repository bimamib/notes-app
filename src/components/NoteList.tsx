import NoteItem from "./NoteItem";
import { NoteListProps } from "../utils/types";

const NoteList = ({ notes, deleteNote, toggleArchiveNote }: NoteListProps) => {
  if (notes.length === 0) {
    return <p>No notes available</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
