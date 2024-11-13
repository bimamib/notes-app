import React, { useState } from "react";
import { AddNoteProps } from "../utils/types";

const AddNote = ({ addNote }: AddNoteProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [maxTitleLength] = useState(50);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addNote(title, body);
    setTitle("");
    setBody("");
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    if (newTitle.length <= maxTitleLength) {
      setTitle(newTitle);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 rounded-lg shadow-md mb-10">
      <div className="mb-6">
        <input
          className="w-full p-3 text-base border rounded-md"
          type="text"
          value={title}
          maxLength={maxTitleLength}
          onChange={handleTitleChange}
          placeholder="Whats Happened"
          required
        />
        <small className="text-sm text-gray-200">
          Remaining Characters {maxTitleLength - title.length}
        </small>
      </div>
      <div className="mb-6">
        <textarea
          className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Details"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
      </div>
      <button
        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        type="submit"
      >
        Add Notes
      </button>
    </form>
  );
};

export default AddNote;
