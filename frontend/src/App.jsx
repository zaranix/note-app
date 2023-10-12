import { useState, useEffect, createContext } from "react";
import axios from "axios";

import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

import "./App.css";
import "./utility.styles.css";

export const NotesListUpdateFunctionContext = createContext(null);

export default function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
			// The URL of the backend
			// you can specify your own if you have a different one
      const API_URL = "http://localhost:8000";
      const { data } = await axios.get(`${API_URL}/notes`);
      setNotes(data);
    };
    getNotes();
  }, []);
  return (
    <NotesListUpdateFunctionContext.Provider value={setNotes}>
      <div>
        <h1 id="app-title">Notes App</h1>
        <AddNote />
        <NotesList notes={notes} />
      </div>
    </NotesListUpdateFunctionContext.Provider>
  );
}