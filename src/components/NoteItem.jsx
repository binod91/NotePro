import styles from "./NoteList.module.css";

function NoteItem({ note, editNote, deleteNote }) {
  if (!note) return null;

  return (
    <>
      <tr>
        <td>{note.title}</td>
        <td>{note.detail}</td>
        <td>{note.date}</td>
        <td>{note.time}</td>

        <td>
          <button className={styles.editBtn} onClick={() => editNote(note.id)}>
            Edit
          </button>
          <button
            className={styles.deletetBtn}
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default NoteItem;
