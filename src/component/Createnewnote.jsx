import { React, useState } from 'react';

function Createnewnote({ srcNote, addNote }) {
  // const [count, setCount] = useState('');
  const maxChar = 50;

  // membuat array
  const [id, setId] = useState(srcNote.length);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [createdAt, setCreatedAt] = useState(new Date().toISOString());
  const [archived, setArchived] = useState(false);

  const addId = () => {
    setId(id + 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newdata = { id, title, body, createdAt, archived };
    addNote(newdata);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2>Buat Catatan</h2>
          <p>Sisa Karakter :{maxChar - title.length}</p>
          <input required className="input" type="text" placeholder="Ini adalah Judul" typeof="dasda" maxLength={50} onChange={(e) => setTitle(e.target.value)} />
          <textarea required name="notes" rows="10" placeholder="Tuliskan catatanmu disini ..." onChange={(e) => setBody(e.target.value)}></textarea>
          <button type="submit" onClick={addId}>
            Buat
          </button>
        </form>
      </div>
    </>
  );
}

export default Createnewnote;
