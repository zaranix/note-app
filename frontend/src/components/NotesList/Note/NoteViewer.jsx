import { useState } from "react";

import DeleteModal from "./DeleteModal";

import "./Note.styles.css";

export default function NoteViewer({ note, setNoteView }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { id, title, note_body } = note;
  const handleDeleteNote = () => {
    setShowDeleteModal(true);
  };
  return (
    <div id="note-container">
      {showDeleteModal && (
        <DeleteModal showDeleteModal={setShowDeleteModal} noteId={id} />
      )}
      <h3>{title}</h3>
      <p>{note_body}</p>
      <div className="note-buttons-container">
        <button
          className="neutral-btn"
          onClick={() => setNoteView("editing")}
        >
          Edit
        </button>
        <button className="delete-btn" onClick={() => handleDeleteNote()}>
          Delete
        </button>
      </div>
    </div>
  );
}