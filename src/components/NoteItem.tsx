import { showFormattedDate } from "../utils/data";
import { NoteItemProps } from "../utils/types";

const NoteItem = ({ note, deleteNote, toggleArchiveNote }: NoteItemProps) => {
  return (
    <div className="bg-white p-5 mb-4 border border-gray-300 rounded-md shadow">
      <>
        <h2 className="text-xl text mb-2 font-bold">{note.title}</h2>
        <p className="text-base mb-4 text-justify">{note.body}</p>
        <p className="text-sm text-gray-500 mb-3">
          {showFormattedDate(note.createdAt)}
        </p>
        <div className="flex gap-2">
          <button
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none"
            onClick={() => toggleArchiveNote(note.id)}
          >
            {note.archived ? "Unarchive" : "Archive"}
          </button>
          <button
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none"
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
