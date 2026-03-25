import { useState, useEffect } from "react";
import styles from "./NoteForm.module.css";

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
    <form className={styles.form} onSubmit={submitHandler}>
      <h1 className={styles.title}>Note Form</h1>
      <div className="title">
        <label htmlFor="title">Title</label>
        <input
          className={styles.input}
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="detail">Description</label>
        <textarea
          className={styles.textarea}
          id="detail"
          maxLength="500"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          required
        />
        <p className={styles.charCount}>
          {500 - detail.length} characters remaining
        </p>
      </div>

      {/* ✅ Step 4 - button text changes */}
      <button className={styles.button} type="submit">
        {editId ? "Update Note" : "Add Note"}
      </button>

      {success && (
        <p className={styles.success} style={{ color: "green" }}>
          Note Saved
        </p>
      )}
    </form>
  );
}

export default NoteForm;
