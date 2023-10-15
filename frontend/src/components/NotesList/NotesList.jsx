import Note from "./Note/Note";

import "./NotesList.styles.css";

export default function NotesList({ notes }) {
  return (
    <div id="notes-list-container">
      <h2 id="notes-list-header">NOTES</h2>
      <ul id="notes-list">
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}