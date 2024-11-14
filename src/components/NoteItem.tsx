import { showFormattedDate } from "../utils/data";
import { NoteItemProps } from "../utils/types";

const NoteItem = ({ note, deleteNote, toggleArchiveNote }: NoteItemProps) => {
  return (
    <div className="p-5 mb-4 bg-white shadow rounded-xl">
      <>
        <h2 className="mb-2 text-xl font-bold text">{note.title}</h2>
        <p className="mb-4 text-base text-justify">{note.body}</p>
        <p className="mb-3 text-sm text-gray-500">
          {showFormattedDate(note.createdAt)}
        </p>
        <div className="flex gap-2">
          <button
            className="inline-flex items-center px-2 py-1 text-sm font-medium text-blue-800 bg-blue-100 border border-transparent rounded-lg gap-x-2 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none"
            onClick={() => toggleArchiveNote(note.id)}
          >
            {note.archived ? "Unarchive" : "Archive"}
          </button>
          <button
            className="inline-flex items-center px-2 py-1 text-sm font-medium text-red-800 bg-red-100 border border-transparent rounded-lg gap-x-2 hover:bg-red-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none"
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </button>
        </div>
      </>
    </div>
  );
};

export default NoteItem;
