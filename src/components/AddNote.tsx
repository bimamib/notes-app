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
    <form className="p-5 mb-12 shadow rounded-xl" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          className="w-full p-2 text-base border rounded-lg focus:outline-none focus:outline-blue-500"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title Notes"
          required
        />
        <small className="text-sm text-gray-300">
          Remaining Characters: {maxTitleLength - title.length}
        </small>
      </div>
      <div className="mb-4">
        <textarea
          className="w-full p-3 text-base border rounded-lg outline-none focus: focus:outline-blue-500"
          placeholder="Details"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
      </div>
      <button
        className="inline-flex items-center px-4 py-3 text-sm font-medium text-green-800 bg-green-100 border border-transparent rounded-lg gap-x-2 hover:bg-green-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none"
        type="submit"
      >
        Add Notes
      </button>
    </form>
  );
};

export default AddNote;
