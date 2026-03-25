function NoteItem({ note, editNote, deleteNote }) {
  if (!note) return null;

  return (
    <>
      <tr>
        <td>{note.title}</td>
        <td>{note.detail}</td>
        <td>
          <button onClick={() => editNote(note.id)}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </td>
      </tr>
    </>
  );
}

export default NoteItem;
