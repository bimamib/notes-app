import NoteList from "./NoteList";
import { NoteListProps } from "../utils/types";

const ArchiveNote = ({
  notes,
  deleteNote,
  toggleArchiveNote,
}: NoteListProps) => {
  return (
    <div>
      <h1 className="mb-5 mt-10 text-xl font-bold lg:text-2xl">
        Archived Notes
      </h1>
      <NoteList
        notes={notes}
        deleteNote={deleteNote}
        toggleArchiveNote={toggleArchiveNote}
      />
    </div>
  );
};

export default ArchiveNote;
