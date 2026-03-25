import { useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

function NotePage() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDetail, setEditDetail] = useState(""); // ✅ fixed name

  function addNotes(title, detail) {
    const newNote = {
      id: Date.now(),
      title,
      detail,
    };
    setNotes((prev) => [...prev, newNote]);
  }

  const searchNote = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) || // ✅ fixed typo
      note.detail.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  function editNote(id) {
    const noteToEdit = notes.find((note) => note.id === id);
    setEditId(id);
    setEditTitle(noteToEdit.title);
    setEditDetail(noteToEdit.detail); // ✅ fixed name
  }

  function updateNote(title, detail) {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === editId ? { ...note, title, detail } : note,
      ),
    );
    setEditId(null);
    setEditTitle("");
    setEditDetail(""); // ✅ fixed name
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  return (
    <>
      <NoteForm
        addNotes={addNotes}
        editId={editId}
        editTitle={editTitle}
        editDetail={editDetail} // ✅ fixed name
        updateNote={updateNote}
      />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteList
        notes={searchNote}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </>
  );
}

export default NotePage;
