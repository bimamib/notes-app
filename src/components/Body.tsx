import ActiveNote from "./ActiveNote";
import AddNote from "./AddNote";
import ArchiveNote from "./ArchiveNote";
import { Note } from "../utils/types";

type BodyProps = {
  notes: Note[];
  addNote: (title: string, body: string) => void;
  deleteNote: (id: number) => void;
  toggleArchiveNote: (id: number) => void;
};

const Body = ({ notes, addNote, deleteNote, toggleArchiveNote }: BodyProps) => {
  const activeNotes = notes.filter((note) => !note.archived);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <main className="max-w-2xl w-4/5 p-4 mx-auto">
      <AddNote addNote={addNote} />
      <ActiveNote
        notes={activeNotes}
        deleteNote={deleteNote}
        toggleArchiveNote={toggleArchiveNote}
      />
      <ArchiveNote
        notes={archivedNotes}
        deleteNote={deleteNote}
        toggleArchiveNote={toggleArchiveNote}
      />
    </main>
  );
};

export default Body;
