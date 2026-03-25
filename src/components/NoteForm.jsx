import { useState, useEffect } from "react";

function NoteForm({ addNotes, editId, editTitle, editDetail, updateNote }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [success, setSuccess] = useState(false);

  // ✅ Step 2 - prefill form when editId changes
  useEffect(() => {
    if (editId) {
      setTitle(editTitle); // prefill title
      setDetail(editDetail); // prefill detail
    } else {
      setTitle(""); // clear form
      setDetail(""); // clear form
    }
  }, [editId, editTitle, editDetail]);

  // ✅ Step 3 - handle both add and edit
  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !detail.trim()) return;

    if (editId) {
      updateNote(title, detail); // ✅ editing → update
    } else {
      addNotes(title, detail); // ✅ adding → add
    }

    setTitle("");
    setDetail("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <form className="note-form" onSubmit={submitHandler}>
      <h1>Note Form</h1>
      <div className="title">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="details">
        <label htmlFor="detail">Description</label>
        <textarea
          id="detail"
          maxLength="500"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          required
        />
      </div>

      {/* ✅ Step 4 - button text changes */}
      <button type="submit">{editId ? "Update Note" : "Add Note"}</button>

      {success && <p style={{ color: "green" }}>Note Saved</p>}
    </form>
  );
}

export default NoteForm;
