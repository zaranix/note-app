import axios from "axios";
import { useState, useContext } from "react";
import { NotesListUpdateFunctionContext } from "../../../App";

import "./Note.styles.css";

export default function NoteEditor({ note, setNoteView }) {
  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteBody, setNoteBody] = useState(note.note_body);
  const [isInvalidSave, setIsInvalidSave] = useState(false);
  const setNotes = useContext(NotesListUpdateFunctionContext);
  const handleNoteSave = async (event, id) => {
    event.preventDefault();
    if (noteTitle.length > 0 || noteBody.length > 0) {
      const API_URL = "http://localhost:8000";
      await axios.put(`${API_URL}/note/${id}`, {
        title: noteTitle,
        note_body: noteBody,
      });
      const { data } = await axios.get(`${API_URL}/notes`);
      setNotes(data);
      setNoteView("viewing");
    } else {
      setIsInvalidSave(true);
      noteTitleInputRef.current.focus();
    }
  };
  return (
    <form
      id="note-container"
      onSubmit={(event) => handleNoteSave(event, note.id)}
    >
      <input
        type="text"
        placeholder="Enter Note Title"
        id="note-title-edit-input"
        className={isInvalidSave ? "input-error" : ""}
        value={noteTitle}
        onChange={(event) => {
          setIsInvalidSave(false);
          setNoteTitle(event.target.value);
        }}
      />
      <textarea
        placeholder="Enter Note"
        id="note-body-edit-input"
        className={isInvalidSave ? "input-error" : ""}
        cols={30}
        rows={5}
        value={noteBody}
        onChange={(event) => {
          setIsInvalidSave(false);
          setNoteBody(event.target.value);
        }}
      />
      <div className="note-buttons-container">
        <button className="save-btn" type="submit">
          Save
        </button>
        <button
          className="neutral-btn"
          type="button"
          onClick={() => setNoteView("viewing")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}