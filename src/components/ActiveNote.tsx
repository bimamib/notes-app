import NoteList from "./NoteList";
import { NoteListProps } from "../utils/types";

const ActiveNote = ({
  notes,
  deleteNote,
  toggleArchiveNote,
}: NoteListProps) => {
  return (
    <div>
      <h1 className="mb-5 text-xl font-bold lg:text-2xl">Active Notes</h1>
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        toggleArchiveNote={toggleArchiveNote}
      />
    </div>
  );
};

export default ActiveNote;
