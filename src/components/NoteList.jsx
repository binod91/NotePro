import NoteItem from "./NoteItem";
import styles from "./NoteList.module.css";
function NoteList({ notes, editNote, deleteNote }) {
  if (!notes || notes.length === 0) return <p>No Data Found</p>;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Detail</th>
            <th>Date</th>
            <th>time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              editNote={editNote}
              deleteNote={deleteNote}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NoteList;
