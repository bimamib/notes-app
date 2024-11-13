export type NavbarProps = {
  onSearch: (keyword: string) => void;
};

export type Note = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  archived: boolean;
};

export type AddNoteProps = {
  addNote: (title: string, body: string) => void;
};

export type NoteListProps = {
  notes: Note[];
  deleteNote: (id: number) => void;
  toggleArchiveNote: (id: number) => void;
};

export type NoteItemProps = {
  note: Note;
  deleteNote: (id: number) => void;
  toggleArchiveNote: (id: number) => void;
};
