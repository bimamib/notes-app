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
    <form className="p-5 rounded-xl shadow mb-12" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className="w-full p-2 text-base border rounded-lg focus:border-blue-500 focus:outline-blue-500"
          type="text"
          value={title}
          maxLength={maxTitleLength}
          onChange={handleTitleChange}
          placeholder="Whats Happened"
          required
        />
        <small className="text-sm text-gray-300">
          Remaining Characters: {maxTitleLength - title.length}
        </small>
      </div>
      <div className="mb-4">
        <textarea
          className="w-full p-3 text-base border rounded-lg focus:border-blue-500 focus:outline-blue-500"
          placeholder="Details"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
      </div>
      <button
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none"
        type="submit"
      >
        Add Notes
      </button>
    </form>
  );
};

export default AddNote;
