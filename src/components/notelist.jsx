import NoteItem from "./NoteItem";
function NoteList({ notes, editNote, deleteNote }) {
  if (!notes || notes.length === 0) return <p>No Data Found</p>;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Detail</th>
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
    </>
  );
}

export default NoteList;
